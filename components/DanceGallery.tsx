import { useEffect, useState } from 'react';
import { fetchDancePhotos, type Photo } from './dance';

type Props = {
  onBack: () => void;
};

type LightboxProps = {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

const Lightbox = ({ photos, index, onClose, onNavigate }: LightboxProps) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowRight')
        onNavigate((index + 1) % photos.length);
      else if (event.key === 'ArrowLeft')
        onNavigate((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index, photos.length, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />
      <img
        src={photos[index].src}
        alt=""
        className="relative max-h-[92dvh] max-w-[92vw] object-contain"
      />
      <button
        type="button"
        aria-label="Close"
        className="absolute top-4 right-4 text-3xl leading-none text-white/70 transition-opacity hover:text-white"
        onClick={onClose}
      >
        ✕
      </button>
      {photos.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            className="absolute left-2 text-4xl leading-none text-white/70 transition-opacity hover:text-white sm:left-6"
            onClick={() =>
              onNavigate((index - 1 + photos.length) % photos.length)
            }
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next photo"
            className="absolute right-2 text-4xl leading-none text-white/70 transition-opacity hover:text-white sm:right-6"
            onClick={() => onNavigate((index + 1) % photos.length)}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

const DanceGallery = ({ onBack }: Props) => {
  const [photos, setPhotos] = useState<Photo[] | null>(null);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    fetchDancePhotos()
      .then(setPhotos)
      .catch(() => setError(true));
  }, []);

  return (
    <div className="min-h-dvh bg-stone-950 text-[#d4d4d4]">
      <header className="sticky top-0 z-10 flex items-center gap-2 bg-stone-950/80 px-4 py-3 text-sm tracking-wide backdrop-blur">
        <a
          href="/"
          className="opacity-70 transition-opacity hover:opacity-100"
          onClick={(event) => {
            event.preventDefault();
            onBack();
          }}
        >
          ← Étienne Robert
        </a>
        <span className="opacity-30">/</span>
        <span>Dance</span>
      </header>

      <main className="p-2 sm:p-4">
        {error && (
          <p className="p-12 text-center opacity-60">
            Couldn’t load the gallery.
          </p>
        )}
        {!error && photos === null && (
          <p className="p-12 text-center opacity-60">Loading…</p>
        )}
        {photos !== null && photos.length === 0 && (
          <p className="p-12 text-center opacity-60">Nothing here yet.</p>
        )}
        {photos !== null && photos.length > 0 && (
          <div className="columns-2 gap-2 sm:columns-3 lg:columns-4">
            {photos.map((photo, index) => (
              <button
                key={photo.name}
                type="button"
                aria-label={`Open ${photo.name}`}
                className="mb-2 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded"
                onClick={() => setSelected(index)}
              >
                <img
                  src={photo.src}
                  alt=""
                  loading="lazy"
                  className="w-full transition-opacity duration-300 hover:opacity-80"
                />
              </button>
            ))}
          </div>
        )}
      </main>

      {selected !== null && photos !== null && (
        <Lightbox
          photos={photos}
          index={selected}
          onClose={() => setSelected(null)}
          onNavigate={setSelected}
        />
      )}
    </div>
  );
};

export default DanceGallery;
