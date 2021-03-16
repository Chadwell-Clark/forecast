import { settings } from "./Settings.js";

let parkCollection = []

export const useParkData = () => {
    
    const parkDataCopy = [...parkData];
    console.log(parkDataCopy);
    return parkDataCopy;
}
export const getParkData = () => {
    return fetch(`
    https://developer.nps.gov/api/v1/parks?limit=500&api_key=${settings.npsKey}
    `)
    .then(response => response.json())
    .then(parkData => {
        // console.log(parkData)
        // console.log(parkData.data);
        parkCollection = parkData;
        return parkData;
        });
};
