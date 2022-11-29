import axios from 'axios'
export { fetchImages }



axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '31597883-15a3bf4ff518d4d0f3038549e';

async function fetchImages(searchQuery, page, perPage) {
  const response = await axios.get(
    `?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  )
  return response
}


  