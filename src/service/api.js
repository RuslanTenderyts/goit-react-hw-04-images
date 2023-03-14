import axios from "axios";



axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY_API = "32847765-3ae84158b7384b51403b1da0b";

export const fetchImagesWithQuery = async (searchQuery, page) => {
  
  const response = await axios.get(`?q=${searchQuery}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`);
  if(!response.data.total) {
    return Promise.reject( new Error( `По запиту "${searchQuery}" картинок не знайдено` ));
  };
  return response.data;
};




