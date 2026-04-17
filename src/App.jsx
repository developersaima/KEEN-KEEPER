import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="mt-16 px-4">

        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default App;