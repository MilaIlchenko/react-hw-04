import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, onImgClick }) {
  return (
    <div>
      <ul className={css.list}>
        {items.map((item) => (
          <li className={css.item} key={item.id}>
            <ImageCard onImgClick={onImgClick} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}