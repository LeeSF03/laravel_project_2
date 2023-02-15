import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeMain from './HomeMain';

if (document.getElementById('home-root')) {
  const root = ReactDOM.createRoot(document.getElementById('home-root'));
  root.render(
      <React.StrictMode>
          <HomeMain/>
      </React.StrictMode>
  );
}