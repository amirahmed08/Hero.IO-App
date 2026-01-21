const getInstalledApp = () => {
  const checkStoredApp = localStorage.getItem("AppsDetails");
  return checkStoredApp ? JSON.parse(checkStoredApp) : [];
};

const addInstalledApp = (id) => {
  const storedApp = getInstalledApp();

  if (storedApp.includes(id)) {
    alert("App already Installed");
    return;
  }

  storedApp.push(id);
  localStorage.setItem("AppsDetails", JSON.stringify(storedApp));
  console.log(storedApp);
};

export { addInstalledApp, getInstalledApp};
