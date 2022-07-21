const API_URL = 'https://type.fit/api/quotes'

const getApi = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data
}


export default getApi