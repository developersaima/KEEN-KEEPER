import { Link } from "react-router";

const NoPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      
      <p className="text-gray-500 mb-6">
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="px-6 py-2 bg-[#244d3f] text-white rounded-lg hover:bg-[#1b3a2f] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NoPage;