import React from 'react';
import Transition from '../components/Transition';

/**
 * Music page showcasing classic Tharu songs from YouTube.
 * Videos are embedded securely using sandboxed iframes.
 */
const Music = () => {
  const videoIds = [
    'ubSHzqW2VY4',
    'HsJRVekYmk8',
    '-F9asXyVQaE',
    'UTNW-j_V-pE',
    'mPuSH-WbUXc',
    '_KZWVcv8Iqs',
    'IUHcJpsPe9I',
    'F3JCsxkCRZM',
  ];

  return (
    <Transition>
      <section className="min-h-screen bg-cream flex flex-col items-center justify-center py-12 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-terracotta mb-8">Tharu Village - Traditional Music</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {videoIds.map((id) => (
            <div key={id} className="w-full aspect-w-45 aspect-h-20">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${id}?rel=0`}
                title={`Tharu Song ${id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        <p className="text-center text-slate max-w-2xl mt-6">
          Enjoy these classic Tharu folk songs that capture the spirit of the community.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-block bg-terracotta hover:bg-terracotta-light text-cream font-semibold py-2 px-4 rounded transition-colors"
          >
            Back to Home
          </a>
        </div>
      </section>
    </Transition>
  );
};

export default Music;
