import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BusinessCard from '../components/BusinessCard';
import './globals.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BusinessCard />
  </StrictMode>
);
