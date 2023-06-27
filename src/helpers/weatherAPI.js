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

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
