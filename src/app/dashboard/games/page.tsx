'use client'
import { useState, useEffect } from 'react';
import { fetchFilteredVideoGames } from '@/lib/data';
import Link from 'next/link';

interface VideoGame {
  id: string;
  title: string;
  description: string;
  image: string | null;
  Platforms: string[]; // Use uppercase "Platforms"
}

export default function VideoGamesPage() {
  const [videoGames, setVideoGames] = useState<VideoGame[]>([]);
  const [filterTitle, setFilterTitle] = useState<string>('');

  useEffect(() => {
    const fetchVideoGames = async () => {
      try {
        const videoGamesData: VideoGame[] = await fetchFilteredVideoGames(filterTitle);
        setVideoGames(videoGamesData);
      } catch (error: any) {
        console.error('Error fetching video games:', error.message);
      }
    };

    fetchVideoGames();
  }, [filterTitle]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTitle(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-5 mb-4">
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videoGames.map((videoGame) => (
          <div key={videoGame.id} className="border-4 p-2 m-2 rounded-lg">
            <div className="mb-4">
              <h2 className="font-bold">{videoGame.title}</h2>
              <p className="text-gray-600">{videoGame.description}</p>
            </div>
            <div className="flex justify-center mb-4">
              <img
                src={videoGame.image || 'https://via.placeholder.com/200'}
                alt={videoGame.title}
                className="w-48 h-48 object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <Link href={`/dashboard/games/${videoGame.id}`}>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-300">
                  View Game
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
