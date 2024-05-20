import css from "./ImageCard.module.css";
import { FcLike } from "react-icons/fc";
import { GrInstagram } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";

export default function ImageCard({
  item: {
    alt_description,
    urls: { small, regular },
    likes,
    user: { name },
  },
  onImgClick,
}) {
  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={small}
          alt={alt_description}
          onClick={() => onImgClick(regular, likes, name)}
          width="210"
          height="130"
        />
      </div>
      <div className={css.textWrapper}>
        <GrInstagram className={css.inst} size="20" color="rgb(133, 12, 97)" />
        <ul className={css.list}>
          <li className={css.item}>
            <FaUserAlt color="rgb(51, 49, 49)" size="12" />
            <p className={css.text}>{name}</p>
          </li>
          <li className={css.item}>
            <FcLike size="12" />
            <p className={css.text}>{likes}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}