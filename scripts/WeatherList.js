

export const showWeather = (forecast) => {

        // console.log(forecast.daily)
        const DomTarget = document.querySelector("#weather");
        for(let i=0; i< forecast.daily.length; i++) {
        // console.log(data.daily[0].dt) 
        const timestamp = forecast.daily[i].dt;
        const date = new Date(timestamp * 1000);
        const dailyForecast = `
        <div>${date.toLocaleString("en-US", { weekday: "short" }).toUpperCase()}    
        ${
            date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}       
        ${forecast.daily[i].temp.max.toFixed(0)}&#8457;-${forecast.daily[i].temp.min.toFixed(0)}&#8457;    
        ${forecast.daily[i].weather[0].description.toUpperCase()}
        <img class="icon" src="http://openweathermap.org/img/wn/${
            forecast.daily[i].weather[0].icon
        }.png"></div>
        `;
        DomTarget.innerHTML += dailyForecast;
    };
}


// console.log(
//   date.toLocaleString("en-US", { weekday: "short" }) +
//     " " +
//     (date.getMonth() + 1) +
//     "/" +
//     date.getDate() +
//     "/" +
//     date.getFullYear() +
//     " HI: " +
//     forecast.daily[i].temp.max +
//     " LO: " +
//     forecast.daily[i].temp.min +
//     " " +
//     forecast.daily[i].weather[0].description
// );