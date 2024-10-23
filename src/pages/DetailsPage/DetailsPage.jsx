import { Outlet, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      DetailsPage for item with id: {id}
      <Outlet />
    </div>
  );
};

export default DetailsPage;