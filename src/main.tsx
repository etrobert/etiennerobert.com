import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SplitSlider from '../components/SplitSlider';
import './globals.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SplitSlider />
  </StrictMode>
);
