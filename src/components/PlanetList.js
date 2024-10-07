//src/components/PlanetList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePlanetStore from '../store/planetStore';

const PlanetList = () => {
  const { planets, isLoading } = usePlanetStore((state) => state);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlanets = planets.filter((planet) =>
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div>Loading planets....</div>;

  return (
    <div className="mt-4">
      <input
        type="text"
        className="w-full p-2 rounded-md text-gray-700 placeholder-gray-400 focus:placeholder-gray-500"
        placeholder="Search planets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-none p-4">
        {filteredPlanets.map((planet) => (
          <li key={planet.name} className="py-2">
            <Link to={`/planets/${planet.name}`} className="text-blue-500">
              {planet.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetList;
