import { useEffect } from "react";
import { verifyUser } from "../utils/api";
import Navbar from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { getUser } from "../features/userSlice";
import Todo from "../components/Todo";

const Home = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.user.userdata);
  console.log(data);
  const username = useAppSelector(
    (state) => state.user.userdata?.data?.firstName
  );
  useEffect(() => {
    const fetchuser = async () => {
      const res = await verifyUser();
      dispatch(getUser(res));
    };
    fetchuser();
  }, [dispatch]);

  return (
    <>
      <Navbar name={username} />
      <Todo />
    </>
  );
};

export default Home;
