const API_HOST1 = "http://192.168.104.75:300";


export async function getPokemonsApi() {
  try {
    const url = `${API_HOST1}/peliculas`;
    console.log(url);
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;

  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}