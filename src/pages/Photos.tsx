import React from "react";
import { importAll } from "../utils/importAll";
import Banner from "../assets/photos/Banner.jpeg";
import Welcome from "../assets/photos/Welcome.jpeg";
import Program from "../assets/photos/Program.jpeg";
import TeachersInvite from "../assets/photos/TeachersInvite.jpeg";
import StudentsInvite from "../assets/photos/StudentsInvite.jpeg";
import EarlyBird from "../assets/photos/EarlyBird.jpeg";

// Declare require.context globally
declare const require: {
  context: (
    path: string,
    deep?: boolean,
    filter?: RegExp
  ) => {
    keys: () => string[];
    resolve: (id: string) => string;
    <T>(id: string): T;
  };
};

// Dynamically import all photos from the assets folder
const photoFiles = importAll(
  require.context("../assets/photos", false, /\.(png|jpe?g|svg|webp)$/)
);
// Filter out the specific images from the dynamically imported list
const specificImages = [
  Banner,
  Welcome,
  Program,
  TeachersInvite,
  StudentsInvite,
  EarlyBird,
];
const remainingImages = photoFiles.filter(
  (photo: string) => !specificImages.includes(photo)
);

const Photos: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl text-center mb-8">Photos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specificImages.map((photo, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img alt="" src={photo} className="photo-item" />
          </div>
        ))}
        {remainingImages.map((photo, index) => (
          <div
            key={photo.id}
            className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img key={index} alt="" src={photo.url} className="photo-item" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
