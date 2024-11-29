// src/App.tsx
import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import { 
  FluentProvider, 
  webLightTheme 
} from '@fluentui/react-components';
import Layout from './components/Layout';
import Home from './pages/Home';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import PostCard from './pages/PostCard';

const App: React.FC = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="photos" element={<Photos />} />
            <Route path="videos" element={<Videos />} />
            <Route path="postcard" element={<PostCard/>} />
          </Route>
        </Routes>
      </Router>
    </FluentProvider>
  );
};

export default App;