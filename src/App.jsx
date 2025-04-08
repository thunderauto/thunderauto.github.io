import { Outlet } from "react-router-dom";
import Navbar from "./(Components)/Navbar";
import "./App.css";
import Footer from "./(Components)/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="flex flex-col min-h-screen font-Poppins bg-color1 relative">
      <Navbar />
      <ToastContainer />

      <div className="flex-1 flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
