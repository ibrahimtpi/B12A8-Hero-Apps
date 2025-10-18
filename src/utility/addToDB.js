import { toast } from 'react-toastify';

const getInstalledApps = () => {
    const installedAppSTR = localStorage.getItem('installedList');

    if(installedAppSTR) {
        const installedAppData = JSON.parse(installedAppSTR);
        return installedAppData;
    } else {
        return [];
    }
}

const installToStoreDB = (id) => {
    const installedAppData = getInstalledApps();
    if(installedAppData.includes(id)) {
        toast("This App has already been installed!");
    } else {
        toast("Installing...");
        installedAppData.push(id);
        const data = JSON.stringify(installedAppData);
        localStorage.setItem('installedList', data);
    }
}

const removeAppFromDB = (id) => {
    let installedApps = getInstalledApps();
    
    const indexToRemove = installedApps.findIndex(appId => parseInt(appId) === id);

    if (indexToRemove > -1) {
        toast("Uninstalling the app...");
        
        installedApps.splice(indexToRemove, 1);
        
        localStorage.setItem('installedList', JSON.stringify(installedApps));
        
        return true; // Indicate success
    }
    return false; // ID not found
};

export { installToStoreDB, getInstalledApps, removeAppFromDB };