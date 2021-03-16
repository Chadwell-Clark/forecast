console.log("Welcome to the main module")
import { getWeatherForecast } from "./WeatherProvider.js";
import { getParkData ,useParkData} from "./ParkProvider.js";


const latitude = 36.1659
const longitude = -86.7844

const EventTarget =document.querySelector("nav");

EventTarget.addEventListener("input", event => {
    console.log(event.target.value)
    //!  take event.target.value and seach through 
    //!   useParkData for match and use info to populate
    //!   itinerary and  get coordinates for weather info
})


const startWheelsInParks = () => {
     getParkData()
        .then(parkData => {
        console.log(parkData)
        // console.log(parkData.data);
        parkData.data.forEach(element => {
            console.log(element)  
        });
        const DOMTarget = document.querySelector("#parks");
        for(const park of parkData.data) {
            console.log(`
            ${park.parkCode}   
            lat: ${latitude}   
            long: ${longitude}   
            ${park.fullName}   
            `);
            const select = `
            <option value="parkCode--${park.parkCode}">${park.fullName}</option>
            `
            DOMTarget.innerHTML += select;

        }
    })
    .then(() => {
        getWeatherForecast(latitude, longitude);
        // useParkData();
    });
}

startWheelsInParks();