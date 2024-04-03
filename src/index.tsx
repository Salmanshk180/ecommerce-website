import React from "react";
import ReactDOM, { createPortal } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider, useSelector } from "react-redux";
import { store, persistor, RootState } from "./redux/store/Store";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { createRoot } from "react-dom/client";
import { SyncLoader } from "react-spinners";

const domNode: HTMLElement = document.getElementById("root")!;
const root = createRoot(domNode);
interface PortalProps {
  children: React.ReactNode;
}
const Portal: React.FC<PortalProps> = ({ children }) => {
  const loading = useSelector((state: RootState) => state.loadings.isLoading);
  return ReactDOM.createPortal(
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader">
            <SyncLoader />
          </div>
        </div>
      )}
      <div className={loading ? "content-loading" : "content"}>{children}</div>
    </>,
    document.getElementById("portal")!
  );
};

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Portal>
        <App />
      </Portal>
      <ToastContainer position="bottom-right" />
    </PersistGate>
  </Provider>
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Portal>
        <App />
      </Portal>
      <ToastContainer position="bottom-right" />
    </PersistGate>
  </Provider>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//         <ToastContainer position="bottom-right" />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
