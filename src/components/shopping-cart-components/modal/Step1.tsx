import React, {
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import styles from "./Step1.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/Store";
import {
  openAddressModal,
} from "../../../redux/slices/modal/modal";
import AddressModal from "../../../pages/Profile/AddressModal";
import { selectAddress } from "../../../redux/slices/address/address";
interface Props {
  setShowNavigation: Dispatch<SetStateAction<boolean>>;
}
const Step1 = (props: Props) => {
  const addresses = useSelector((state: RootState) => state.address.addresses);
  const adddressModal = useSelector(
    (state: RootState) => state.modal.addressModal
  );
  const dispatch = useDispatch();
  useEffect(() => {
    props.setShowNavigation(true);
  }, [props]);
  const handleAddressSelect = (address: any) => {
    dispatch(selectAddress({address:address}));
  };
  return (
    <>
      {adddressModal && <AddressModal />}
      <div className={styles["container"]}>
        <form className={styles["address-form"]}>
          <h5>Choose Shipping Address:</h5>
          <select
            name="address"
            id={styles["address"]}
            onChange={(e) => {
              const selectedAddressId = e.target.value;
              console.log(e.target.value);
              
              const selectedAddress = addresses?.find(
                (address) => address.id === selectedAddressId
              );
              if (selectedAddress) {
                handleAddressSelect(selectedAddress);
              }
            }}
          >
            {addresses?.map((address) => (
              <option value={address.id!}>
                {address.building}, {address.street}, {address.city},{" "}
                {address.state},{address.pincode}, {address.country}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => {
              dispatch(selectAddress({ address: null }));
              dispatch(openAddressModal());
            
            }}
          >
            Add Address
          </button>
        </form>
      </div>
    </>
  );
};

export default Step1;
