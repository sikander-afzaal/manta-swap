import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
};

export default App;
