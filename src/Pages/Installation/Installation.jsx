import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApp, removeInstalledApp } from '../../Utility/Utility';
import InstalledApp from '../InstalledApp/InstalledApp';

const Installation = () => {
  const [appList, setAppList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedAppData = getInstalledApp();
    const installedApps = data.filter(app =>
      storedAppData.includes(app.id)
    );
    setAppList(installedApps);
  }, [data]);

  const handleRemoveInstalledApp = (id) => {
    removeInstalledApp(id);
    setAppList(prev => prev.filter(app => app.id !== id));
  };

  return (
    <div className="bg-base-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="p-8">
          <h1 className="text-center text-4xl font-bold">Your Installed Apps</h1>
          <p className="text-center text-gray-500 font-semibold mt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex justify-between items-center w-full mb-5">
          <h2 className="text-2xl font-bold">
            {appList.length}. Apps Found
          </h2>
          <button className="btn btn-ghost">Sort by Size</button>
        </div>

        <div className="space-y-4 mb-10">
          {appList.map(b => (
            <InstalledApp
              key={b.id}
              b={b}
              removeInstalledApp={handleRemoveInstalledApp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
