import { useDispatch, useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { ChangeEventHandler, FormEvent, useEffect, useState } from "react";
import {
  Address,
  addAddress,
  deleteAddress,
  getAddress,
  selectAddress,
} from "../../redux/slices/address/address";
import { deleteUser, logout, updateUser } from "../../redux/slices/users/users";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import AddressModal from "./AddressModal";
import { openAddressModal } from "../../redux/slices/modal/modal";

const Profile = () => {
  const user = useSelector((state: RootState) => state.users.user);
  const addresses: any = useSelector(
    (state: RootState) => state.address?.addresses
  );
  const addressModal = useSelector((state:RootState)=>state.modal.addressModal);
  const [firstname, setFirstname] = useState(user?.first_name!);
  const [lastname, setLastname] = useState(user?.last_name!);
  const [email, setEmail] = useState(user?.email!);
  const [phonenumber, setPhoneNumber] = useState(user?.phone_number!);
  const [building, setBuilding] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPinCode] = useState(0);
  const [country, setCountry] = useState("");
  const [onUpdate, setUpdate] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (user?.id) {
      dispatch(getAddress({ id: user.id }));
    }
  }, [dispatch]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !phonenumber) {
      toast.error("Please enter details");
    } else {
      await dispatch(
        updateUser({
          id: user?.id!,
          first_name: firstname!,
          last_name: lastname!,
          email: email!,
          phone_number: phonenumber!,
        })
      );
      dispatch(getAddress({ id: user?.id! }));
      setUpdate(false);
    }
  };

  const handleAddress = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!building || !street || !city || !state || !country || pincode == 0) {
      toast.error("Please enter address details");
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
      setBuilding("");
      setState("");
      setCity("");
      setCountry("");
      setPinCode(0);
      setStreet("");
      toast.success("Address Added Successfully");
      await dispatch(getAddress({ id: user?.id! }));
    }
  };
  return (
    <>
      {addressModal && <AddressModal  />}
      <div className={styles["profile-container"]}>
        <div className={styles["main-container"]}>
          <h1>Profile Page</h1>
          <form className={styles["profile-form"]} onSubmit={handleSubmit}>
            <div className={styles["form-row"]}>
              <label htmlFor="firstname">Firstname:</label>
              {onUpdate ? (
                <input
                  type="text"
                  id="firstname"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              ) : (
                <p>{firstname}</p>
              )}
            </div>
            <div className={styles["form-row"]}>
              <label htmlFor="lastname">Lastname:</label>
              {onUpdate ? (
                <input
                  type="text"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              ) : (
                <p>{lastname}</p>
              )}
            </div>
            <div className={styles["form-row"]}>
              <label htmlFor="email">Email:</label>
              {onUpdate ? (
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <p>{email}</p>
              )}
            </div>
            <div className={styles["form-row"]}>
              <label htmlFor="phonenumber">Phone Number:</label>
              {onUpdate ? (
                <input
                  type="tel"
                  id="phonenumber"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              ) : (
                <p>{phonenumber}</p>
              )}
            </div>
            <div className={styles["form-row"]}>
              {!onUpdate && (
                <>
                  <button type="button" onClick={() => setUpdate(!onUpdate)}>
                    {onUpdate ? "Cancel" : "Update Profile"}
                  </button>
                  {/* <button
                    type="button"
                    className={styles["delete"]}
                    onClick={async () => {
                      window.alert("Are you sure you want to delete");
                      if (user!.id) {
                        await dispatch(deleteUser(user?.id!));
                        dispatch(logout());
                      }
                    }}
                  >
                    Delete
                  </button> */}
                </>
              )}
              {onUpdate && <button type="submit">Update</button>}
            </div>
          </form>
        </div>
      </div>

      <div className={styles["address-container"]}>
        <div className={styles["address-main-container"]}>
          <div className={styles["display-address-container"]}>
            <h1>Shipping Addresses</h1>
            {addresses?.map((address: Address, index: number) => (
              <div className={styles["address"]}>
                <div className={styles["address-form-row-1"]}>
                  <p>
                    {address.building!}, {address.street!}, {address.city!},{" "}
                    {address.state!}, {address.pincode!}, {address.country!}
                  </p>
                </div>
                <div className={styles["address-btn-container"]}>
                  <button
                    onClick={() => {
                      dispatch(selectAddress({ address: address }));
                      dispatch(openAddressModal());
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className={styles["delete"]}
                    onClick={async () => {
                      await dispatch(
                        deleteAddress({ query: { id: address?.id! } })
                      );
                      dispatch(getAddress({ id: user?.id! }));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles["address-btn-container"]}>
            <button
              className={styles["add-address-btn"]}
              onClick={() => {
                dispatch(selectAddress({ address: null }));
                dispatch(openAddressModal());
              }}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
