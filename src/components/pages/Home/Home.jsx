import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded mt-8">
          <Link to='/register'>Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
