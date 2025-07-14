import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // TypeScript에서는 null 가능성 처리

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
