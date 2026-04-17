import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { TimelineProvider } from "./context/TimelineContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <TimelineProvider>
      <Navbar />
      <main className="my-15">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </TimelineProvider>
  );
};

export default App;
