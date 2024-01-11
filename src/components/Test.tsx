import React from "react";
import { useAppSelector } from "../app/hook";
const Test = () => {
  const data = useAppSelector((state) => state.user.userdata);
  console.log(data);
  return <div>Test</div>;
};

export default Test;
