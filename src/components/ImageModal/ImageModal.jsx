import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { FcLike } from "react-icons/fc";
import { GrInstagram } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

export default function ImageModal({
  imgModal,
  onModalClose,
  image,
  imgLikes,
  user,
}) {
  return (
    <div>
      <Modal
        className={css.container}
        isOpen={imgModal}
        onRequestClose={onModalClose}
        style={customStyles}
      >
        <img className={css.img} src={image} />
        <div className={css.textWrapper}>
          <GrInstagram
            className={css.inst}
            size="50"
            color="rgb(133, 12, 97)"
          />
          <ul className={css.list}>
            <li className={css.item}>
              <FaUserAlt color="rgb(51, 49, 49)" size="30" />
              <p className={css.text}>{user}</p>
            </li>
            <li className={css.item}>
              <FcLike size="30" />
              <p className={css.text}>{imgLikes}</p>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}