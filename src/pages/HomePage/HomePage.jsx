import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Campers of your dreams</h1>
      <h2>You can find everything you want in our catalog</h2>
      <Link to="/catalog">View Now</Link>
    </>
  );
};

export default HomePage;