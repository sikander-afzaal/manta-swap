import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <div className="bg-mainBg min-h-screen pt-8 sm:pt-12 bg-center bg-cover bg-no-repeat flex w-full flex-col justify-start items-center">
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </div>
    </>
  );
};

export default App;
