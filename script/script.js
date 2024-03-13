
// store api key and api url 
const apiKey = "396cd68f2cfc213e0f6de4feef5647ef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// find serch box and search button 
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
 


// check weather and display 
async function checkWeather(userCity){
    // call api and get deta
    const response = await fetch(apiUrl + userCity + `&appid=${apiKey}`)
    let data = await response.json()
    console.log(data)

    
    if ("404"== data.cod){
        // error handle with if else 
        document.querySelector(".city").innerHTML = "Your city name is invalid";
        document.querySelector(".city").classList.add('invalid-style');

        //all value empty 
        document.querySelector(".temp").innerHTML = ' __°C';
        document.querySelector(".humidity").innerHTML = '__ %';
        document.querySelector(".wind").innerHTML='__  km/h';
    }else {

        // display all data on HTML document 
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".city").classList.remove('invalid-style');
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';


        // depend weather condition and change image 
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = './images/clear.png';
            weatherIcon.alt = "clear weather";
        }else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = './images/Clouds.png';
            weatherIcon.alt = "Clouds weather";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = './images/drizzle.png';
            weatherIcon.alt = "Drizzle weather";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = './images/mist.png';
            weatherIcon.alt = "Mist weather";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = './images/rain.png';
            weatherIcon.alt = "Rain weather";
        }
    }
    



}

// take user data from search box 
searchButton.addEventListener("click", () => {
    userCity = searchBox.value;
    checkWeather(userCity)
})


//take user data from search box  when keydown enter key 
window.addEventListener("keydown", (e)=> {
    if (e.key === "Enter"){
        userCity = searchBox.value;
        checkWeather(userCity)
    }
    
})


