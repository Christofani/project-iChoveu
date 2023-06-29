const TOKEN = import.meta.env.VITE_TOKEN;

export async function searchCities(term) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
    const data = await response.json();
    if (data.length === 0) {
      alert('Nenhuma cidade encontrada');
    }
    return data;
  } catch (error) {
    alert(error);
  }
}

export async function getWeatherByCity(cityURL) {
  try {
    console.log(cityURL);
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
    const data = await response.json();
    const {
      temp_c: temp,
      condition: { icon, text: condition },
    } = data.current;
    const { name, country } = data.location;
    return {
      name,
      temp,
      icon,
      condition,
      country,
      url: cityURL,
    };
  } catch (error) {
    return error;
  }
}

export const getForeCast = async (url) => {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${url}&days=7`);
  const data = await response.json();
  console.log(data.forecast.forecastday);
  return data.forecast.forecastday;
};
