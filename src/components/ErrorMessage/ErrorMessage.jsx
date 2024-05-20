import css from "./ErrorMessage.module.css";
import { BiSolidErrorAlt } from "react-icons/bi";

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <p className={css.title}>
        <BiSolidErrorAlt />
        Whoops, something went wrong!
      </p>
      <p className={css.error}> Please, try to reload this page!</p>
    </div>
  );
}