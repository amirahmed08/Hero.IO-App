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

// hendleRemove
 const removeInstalledApp = (id) => {
  const storedApp = getInstalledApp()
  const removingApp = storedApp.filter(appId=> appId !== id)
  localStorage.setItem("AppsDetails", JSON.stringify(removingApp))
}

export { addInstalledApp, getInstalledApp, removeInstalledApp};
