import React from 'react';
import ReactDOM from 'react-dom/client';
import WlcHeader from './WlcHeader';

if (document.getElementById('wlc-root')) {
  const root = ReactDOM.createRoot(document.getElementById('wlc-root'));
  root.render(
      <React.StrictMode>
          <WlcHeader/>
      </React.StrictMode>
  );
}