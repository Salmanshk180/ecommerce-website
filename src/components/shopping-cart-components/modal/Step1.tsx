import React, { useEffect, useState } from "react";
import styles from "./Step1.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/Store";
import {
  closeAddressModal,
  closeModal,
  openAddressModal,
} from "../../../redux/slices/modal/modal";
import AddressModal from "../../../pages/Profile/AddressModal";
import { selectAddress } from "../../../redux/slices/address/address";
const Step1 = () => {
  const addresses = useSelector((state: RootState) => state.address.addresses);
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const adddressModal = useSelector((state: RootState) => state.modal.addressModal);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(closeModal());
  //   dispatch(closeAddressModal());
  // }, []);
  return (
    <>
    {
      adddressModal &&
      <AddressModal />
    }
      <div className={styles["container"]}>
        <form className={styles["address-form"]}>
          <h5>Choose Shipping Address:</h5>
          <select name="address" id={styles["address"]}>
            {addresses?.map((address) => (
              <option value="address1">
                {address.building}, {address.street}, {address.city},{" "}
                {address.state},{address.pincode}, {address.country}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => {
              dispatch(selectAddress({address:null}))
              dispatch(openAddressModal());
              // if (isOpen) {
                // dispatch(closeModal());
              // }
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
