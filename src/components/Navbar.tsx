import { Link } from "react-router-dom";
import { logoutApi } from "../utils/api";
const Navbar = ({ name }) => {
  return (
    <>
      <div className="bg-gray-50 flex justify-between">
        <Link to={"/"}>Home</Link>
        <div className="">
          <button onClick={() => logoutApi()}>Logout</button>
          <p>hii {name}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
