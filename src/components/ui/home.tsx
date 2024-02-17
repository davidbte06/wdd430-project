'use client'
import React, { useState } from 'react';

interface Game {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const HomeComponent: React.FC = () => {
    const [games, setGames] = useState<Game[]>([
        {
            id: 1,
            title: "Game 1 Title",
            description: "Description of Game 1",
            imageUrl: "game1.jpg"
        },
        {
            id: 2,
            title: "Game 2 Title",
            description: "Description of Game 2",
            imageUrl: "game2.jpg"
        }
        // Add more games as needed
    ]);

    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Main content area */}
            <div className="container mx-auto px-4">
                {/* Search bar */}
                <div className="search-bar mt-8 mb-4">
                    <input
                        type="text"
                        placeholder="Search for games..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="border border-gray-300 rounded-md py-2 px-4 mr-2 w-3/4"
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        Search
                    </button>
                </div>

                {/* List of video games */}
                <div className="game-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredGames.map(game => (
                        <div className="game-item" key={game.id}>
                            <img src={game.imageUrl} alt={game.title} className="rounded-lg" />
                            <h2 className="text-lg font-semibold mt-2">{game.title}</h2>
                            <p className="text-sm mt-1">{game.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default HomeComponent;
