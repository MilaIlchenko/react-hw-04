import css from "./NotFoundError.module.css";
import { BiSolidErrorAlt } from "react-icons/bi";

export default function NotFoundError() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>
        <BiSolidErrorAlt />
        Not found!!!!!
      </h2>
      <p className={css.error}>Please, try to make another request!</p>
    </div>
  );
}