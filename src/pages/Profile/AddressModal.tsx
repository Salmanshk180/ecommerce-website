import React, { FormEvent, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addAddress,
  getAddress,
  updateAddress,
} from "../../redux/slices/address/address";
import { updateUser } from "../../redux/slices/users/users";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import styles from "./AddressModal.module.css";
import { closeAddressModal } from "../../redux/slices/modal/modal";

const AddressModal = () => {
  const user = useSelector((state: RootState) => state.users.user);
  const selectedAddress = useSelector(
    (state: RootState) => state.address.selectedAddress
  );
  const [building, setBuilding] = useState(
    selectedAddress?.building ? selectedAddress?.building : ""
  );
  const [street, setStreet] = useState(
    selectedAddress?.street ? selectedAddress?.street : ""
  );
  const [city, setCity] = useState(
    selectedAddress?.city ? selectedAddress?.city : ""
  );
  const [state, setState] = useState(
    selectedAddress?.state ? selectedAddress?.state : ""
  );
  const [pincode, setPinCode] = useState(
    selectedAddress?.pincode ? selectedAddress?.pincode : 0
  );
  const [country, setCountry] = useState(
    selectedAddress?.country ? selectedAddress?.country : ""
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (user?.id) {
      dispatch(getAddress({ id: user.id }));
    }
  }, [dispatch]);
  const handleAddress = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!building || !street || !city || !state || !country || pincode == 0) {
      toast.error("Please enter address details");
    } else {
      if (selectedAddress) {
        await dispatch(
          updateAddress({
            query: { id: selectedAddress?.id! },
            data: {
              building: building,
              street: street,
              city: city,
              state: state,
              pincode: pincode,
              country: country,
            },
          })
        );
        toast.success("Address Updated Successfully");
      } else {
        await dispatch(
          addAddress({
            query: { id: user?.id! },
            data: {
              building: building,
              street: street,
              city: city,
              state: state,
              pincode: pincode,
              country: country,
            },
          })
        );
        toast.success("Address Added Successfully");
      }
      setBuilding("");
      setState("");
      setCity("");
      setCountry("");
      setPinCode(0);
      setStreet("");
      await dispatch(getAddress({ id: user?.id! }));
    }
  };
  return (
    <div className={styles["background"]}>
      <div className={styles["container"]}>
        <button
          className={styles["close-modal"]}
          onClick={() => {            
            dispatch(closeAddressModal())}}
        >
          x
        </button>
        <div className={styles["modal-container"]}>
          <h3>Address Form</h3>
          <form
            className={styles["address-form"]}
            onSubmit={(e) => {
              handleAddress(e);
            }}
          >
            <div className={styles["address-form-contianer"]}>
              <div className={styles["address-form-row"]}>
                <input
                  type="text"
                  placeholder="Building"
                  value={building}
                  onChange={(e) => setBuilding(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className={styles["address-form-row"]}>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className={styles["address-form-row"]}>
                <input
                  type="text"
                  placeholder="123456"
                  value={pincode}
                  onChange={(e) => setPinCode(+e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className={styles["address-form-row"]}>
                <button type="submit">
                  {selectedAddress ? "Update Address" : "Add New Address"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
