import { Outlet, useParams } from "react-router-dom";
import clsx from "clsx";

import css from "./Details.module.css";

const DetailsPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <section className={clsx(css["details-content"], "container")}>
        Details
      </section>
      <section className="container">
        <Outlet />
      </section>
    </>
  );
};

export default DetailsPage;