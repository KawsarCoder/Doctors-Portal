import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  modalData,
  successBtnName,
  successAction,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirmation-modal"
              className="btn btn-warning text-white"
            >
              {successBtnName}
            </label>
            <button onClick={closeModal} className="btn btn-outline">
              Cencel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
