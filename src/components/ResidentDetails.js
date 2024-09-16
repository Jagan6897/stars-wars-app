import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getResidentDetails } from '../api/starWarsAPI';

const ResidentDetails = () => {
  const { residentUrl } = useParams();
  const [resident, setResident] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResidentData() {
      const data = await getResidentDetails(decodeURIComponent(residentUrl));
      setResident(data);
      setLoading(false);
    }
    fetchResidentData();
  }, [residentUrl]);

  if (loading) return <div>Loading resident details...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900">{resident.name}</h2>
            <p className="text-gray-600 mt-2">Height: <span className="text-gray-700">{resident.height} cm</span></p>
            <p className="text-gray-600 mt-2">Mass: <span className="text-gray-700">{resident.mass} kg</span></p>
            <p className="text-gray-600 mt-2">Gender: <span className="text-gray-700">{resident.gender}</span></p>
            <p className="text-gray-600 mt-2">Birth Year: <span className="text-gray-700">{resident.birth_year}</span></p>
        </div>
    </div>
</div>

  );
};

export default ResidentDetails;
