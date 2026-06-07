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
};

// Fisher-Yates shuffle, returning a new array.
const shuffle = <T>(items: T[]): T[] => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const fetchDancePhotos = async (): Promise<Photo[]> => {
  const response = await fetch(`${BASE}/`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok)
    throw new Error(`Failed to load dance photos: ${response.status}`);

  const items = ListingSchema.parse(await response.json());

  const images = items.filter((item) => !item.is_dir && isImage(item.name));

  return shuffle(images).map((item) => ({
    name: item.name,
    src: `${BASE}/${encodeURIComponent(item.name)}`,
  }));
};
