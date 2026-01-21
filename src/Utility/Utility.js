import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getInstalledApp = () => {
  const checkStoredApp = localStorage.getItem("AppsDetails");
  return checkStoredApp ? JSON.parse(checkStoredApp).map(Number) : [];
};

const addInstalledApp = (id) => {
  const storedApp = getInstalledApp();
  const appId = Number(id);

  if (storedApp.includes(appId)) {
    toast.info("App already installed");
    return;
  }

  storedApp.push(appId);
  localStorage.setItem("AppsDetails", JSON.stringify(storedApp));

  toast.success("App installed successfully 🎉");
};

const removeInstalledApp = (id) => {
  const storedApp = getInstalledApp();
  const updated = storedApp.filter(appId => appId !== Number(id));
  localStorage.setItem("AppsDetails", JSON.stringify(updated));

  toast.success("App uninstalled successfully 🗑️");
};

export { addInstalledApp, getInstalledApp, removeInstalledApp };
