function fetchSearchbar(searchName,page) {
    const API_KEY ='24517563-cb5ca9bdf2a7ef421e07dbbf9';
    return    (
        fetch(`https://pixabay.com/api/?q=${searchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r=>{
            if(!r.ok){ return Promise.reject(new Error (`нет запроса ${searchName}`))}
       return r.json()
        }))
    
  }
  
  const api = {
    fetchSearchbar,
  };
  
  export default api;