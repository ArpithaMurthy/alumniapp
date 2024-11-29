import React from 'react';
import { MediaItem } from '../types';

const importAll = (r: __WebpackModuleApi.RequireContext) => {
  return r.keys().map(r);
};

// Declare require.context globally
declare const require: {
  context: (path: string, deep?: boolean, filter?: RegExp) => {
    keys: () => string[];
    resolve: (id: string) => string;
    <T>(id: string): T;
  };
};

const Videos: React.FC = () => {
  // Dynamically import all videos from the assets folder
  const videoFiles = importAll(require.context(
    '../assets/videos', 
    false, 
    /\.(mp4|webm|ogg)$/
  ));

  const videos: MediaItem[] = videoFiles.map((video, index) => ({
    id: index + 1,
    title: `Video ${index + 1}`,
    url: video,
    description: `Description for video ${index + 1}`
  }));
  return (
    <div>
      <h2 className="text-3xl text-center mb-8">Video Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <video 
              src={video.url} 
              controls 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{video.title}</h3>
              <p className="text-sm opacity-70">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;