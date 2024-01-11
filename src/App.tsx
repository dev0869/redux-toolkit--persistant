import Login from "./components/Login";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Protected from "./utils/Protected";
import Test from "./components/Test";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Protected />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </>
  );
};

export default App;
