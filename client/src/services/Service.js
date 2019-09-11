const baseURL = 'http://localhost:3000/api/trail/'
const favURL  = 'http://localhost:3000/api/favourites/'
export default {
  getTrails(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postTrail(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteTrail(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  },
  editTrail(id, payload){
    return fetch(baseURL + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
      addFavourite(payload){
    return fetch(favURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  getFavourites(){
    return fetch(favURL)
    .then(res => res.json())
  }

}
