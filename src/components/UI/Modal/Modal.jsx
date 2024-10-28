import clsx from "clsx";
import { Icon } from "@/components";
import css from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div
        className={clsx(css.modalContent)}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <div>
          <Icon
            iconName="icon-cross"
            className={css.closeButton}
            onClick={onClose}
          />
        </div> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
