import { z } from 'zod';

const BASE = 'https://files.etiennerobert.com/dance';

const FileItemSchema = z.object({
  name: z.string(),
  size: z.number(),
  url: z.string(),
  mod_time: z.string(),
  mode: z.number(),
  is_dir: z.boolean(),
  is_symlink: z.boolean(),
});

const ListingSchema = z.array(FileItemSchema);

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'];

const isImage = (name: string) => {
  const extension = name.split('.').pop()?.toLowerCase() ?? '';
  return IMAGE_EXTENSIONS.includes(extension);
};

export type Photo = {
  name: string;
  src: string;
  alt: string;
};

// Filenames are the only metadata we have, so derive a readable label from
// them for alt text: drop the extension and turn separators into spaces.
const altFromName = (name: string) =>
  name
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim();

export const fetchDancePhotos = async (): Promise<Photo[]> => {
  const response = await fetch(`${BASE}/`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok)
    throw new Error(`Failed to load dance photos: ${response.status}`);

  const items = ListingSchema.parse(await response.json());

  return items
    .filter((item) => !item.is_dir && isImage(item.name))
    .sort((a, b) => b.mod_time.localeCompare(a.mod_time))
    .map((item) => ({
      name: item.name,
      src: `${BASE}/${encodeURIComponent(item.name)}`,
      alt: altFromName(item.name),
    }));
};
