//src/pages/HomePage.js
import React, { useEffect } from 'react';
import PlanetList from '../components/PlanetList';
import usePlanetStore from '../store/planetStore';

const HomePage = () => {
  const fetchPlanets = usePlanetStore((state) => state.fetchPlanets);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  return (
    <div className="bg-gray-800 text-white p-6">
  <h1 className="text-3xl font-bold">Star Wars Planets</h1>
      <PlanetList />
    </div>
  );
};

export default HomePage;
