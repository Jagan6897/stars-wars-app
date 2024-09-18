
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getResidents } from '../api/starWarsAPI';

const PlanetDetails = () => {
  const { planetName } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanetData() {
      const planetData = await getResidents(`https://swapi.dev/api/planets/?search=${planetName}`);
      setPlanet(planetData.results[0]);
      setLoading(false);
    }
    fetchPlanetData();
  }, [planetName]);

  if (loading) return <div>Loading residents...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">{planet.name}</h2>
            <p className="text-gray-600 mt-1">Population: {planet.population}</p>
        </div>
        <ul className="divide-y divide-gray-300">
            {planet.residents.map((residentUrl, index) => (
                <li key={index} className="p-4 hover:bg-gray-50">
                    <Link to={`/planets/${planet.name}/${encodeURIComponent(residentUrl)}`}
                        className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out">
                        Resident {index + 1}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
</div>

  );
};

export default PlanetDetails;
