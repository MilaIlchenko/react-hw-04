import { Hearts } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.container}>
      <Hearts
        height="50"
        width="50"
        color="rgb(81, 88, 212)"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}