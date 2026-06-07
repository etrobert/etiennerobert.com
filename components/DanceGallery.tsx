import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchDancePhotos } from './dance';

const DanceGallery = () => {
  const {
    data: photos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['dance-photos'],
    queryFn: fetchDancePhotos,
  });

  return (
    <div className="min-h-dvh bg-stone-950 text-[#d4d4d4]">
      <header className="sticky top-0 z-10 flex items-center gap-2 bg-stone-950/80 px-4 py-3 text-sm tracking-wide backdrop-blur">
        <Link
          to="/"
          className="opacity-70 transition-opacity hover:opacity-100"
        >
          ← Étienne Robert
        </Link>
        <span className="opacity-30">/</span>
        <span>Dance</span>
      </header>

      <main className="p-2 sm:p-4">
        {isError && (
          <p className="p-12 text-center opacity-60">
            Couldn’t load the gallery.
          </p>
        )}
        {!isError && isPending && (
          <p className="p-12 text-center opacity-60">Loading…</p>
        )}
        {photos && photos.length === 0 && (
          <p className="p-12 text-center opacity-60">Nothing here yet.</p>
        )}
        {photos && photos.length > 0 && (
          <div className="columns-2 gap-2 sm:columns-3 lg:columns-4">
            {photos.map((photo) => (
              <img
                key={photo.name}
                src={photo.src}
                alt=""
                loading="lazy"
                className="mb-2 block w-full break-inside-avoid rounded"
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default DanceGallery;
