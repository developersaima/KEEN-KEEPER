import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="mt-16 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default App;