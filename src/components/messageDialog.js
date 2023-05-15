import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext } from "react";

function MessageDialog({
  CancelButtonText,
  CancelButtonVisible,
  ConfirmButtonText,
  onConfirm,
  titleModal,
  text,
}) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div
        className="modal fade"
        id="messageDialog"
        tabindex="-1"
        role="dialog"
        aria-labelledby="messageDialogTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered "
          role="document"
          style={{ color: "black" }}
        >
          <div
            className={
              "modal-content " + (!darkMode ? "sfondo3" : "sfondocard1")
            }
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {titleModal}
              </h5>
              <button
                type="button "
                className={
                  "close nav1buttonl " + (darkMode ? "testolight" : "testodark")
                }
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{text}</div>
            <div className="modal-footer">
              {CancelButtonVisible && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  {CancelButtonText}
                </button>
              )}
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={onConfirm}
              >
                {ConfirmButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MessageDialog };
