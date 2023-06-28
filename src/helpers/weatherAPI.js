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
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
    const data = await response.json();
    return data.map(({ current }) => ({
      temp: current.temp_c,
      condition: current.condition.text,
      icon: current.condition.icon,
    }));
  } catch (error) {
    return error;
  }
}
