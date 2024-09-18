import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlanetPage from './pages/PlanetPage';
import ResidentPage from './pages/ResidentPage';

// Breadcrumbs Component
const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  console.log(pathnames);

  const breadcrumbLinks = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    // Custom naming for specific paths
    let displayName = value;
    if (value.includes('swapi.dev')) {
      // Assuming the URL pattern is known and consistent
      const matches = decodeURIComponent(value).match(/people\/(\d+)/);
      if (matches && matches.length > 1) {
        displayName = "Resident"; // This could be dynamically fetched if needed
      }
    }
    return (
      <span key={to} className="text-sm">
        {index > 0 && <span className="text-gray-500 mx-2">/</span>}
        <Link to={to} className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">
          {decodeURIComponent(displayName).replace(/-/g, ' ')}
        </Link>
      </span>
    );
  });

  return (
    <div className="mb-4 text-gray-700">
      {breadcrumbLinks.length > 0 ? breadcrumbLinks : <h1 className="text-2xl font-semibold">Home Page</h1>}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="p-8 max-w-4xl mx-auto">
        <header className="mb-8">
          <Breadcrumbs />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planets" element={<HomePage/>}/>
          <Route path="/planets/:planetName" element={<PlanetPage />} />
          <Route path="/planets/:planetName/:residentUrl" element={<ResidentPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
