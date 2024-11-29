// src/pages/Home.tsx
import React from "react";
import { Button } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import JnvLogo from "../assets/JnvLogo.png";
import AlumniLogo from "../assets/AlumniLogo.jpg";
import Banner from "../assets/photos/Banner.jpeg";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center items-center space-x-4">
        <img src={JnvLogo} alt="Logo" className="h-16 w-16" />
        <h1 className="text-4xl font-bold mb-4">
          Welcome to JNV Tumakuru Alumni
        </h1>
        <img src={AlumniLogo} alt="Logo" className="h-16 w-16" />
      </div>
      <p className="max-w-2xl mx-auto text-lg mb-6">
        We are fortunate to learn from JNV. Lets all come together have fun and
        share our experiences.
      </p>
      <div className="flex justify-center space-x-4">
        <Button appearance="primary" onClick={() => navigate("/photos")}>
          View Photos
        </Button>
        <Button appearance="secondary" onClick={() => navigate("/videos")}>
          Watch Videos
        </Button>
      </div>
      <div className="flex justify-center space-x-4">
        <img alt="" src={Banner} width={600} height={600} />
      </div>
    </div>
  );
};

export default Home;
