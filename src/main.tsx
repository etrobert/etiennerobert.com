import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { z } from 'zod';
import SplitSlider from '../components/SplitSlider';
import './globals.scss';

const FileItemSchema = z.object({
  name: z.string(),
  size: z.number(),
  url: z.string(),
  mod_time: z.string(),
  mode: z.number(),
  is_dir: z.boolean(),
  is_symlink: z.boolean(),
});

const BrowseResponseSchema = z.array(FileItemSchema);

fetch('https://files.etiennerobert.com', {
  headers: { Accept: 'application/json' },
})
  .then((response) => response.json())
  .then(BrowseResponseSchema.parse)
  .then((files) => console.log('files.etiennerobert.com:', files));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SplitSlider />
  </StrictMode>,
);
