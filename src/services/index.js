import axios from 'axios'

export const getBackgroundIMG = async () => {
    let img = null;
    try {
        img = await axios.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR')
        return img
    } catch (e) {
        throw new Error(e)
    }
}

export const getLocationWeather = async (location) => {
        location = 'mesquita'
    try {
        const weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=7ba73e0eb8efe773ed08bfd0627f07b8`)
        if(weather) {
            const icon = getIcon(weather)
            return {iconPng: icon, ...weather}
        }
        return null
    } catch(e)  {
        throw new Error(e)
    }
}

const getIcon = (weather) => {
    return `http://openweathermap.org/img/w/${weather.data.weather[0].icon}.png`
    
}