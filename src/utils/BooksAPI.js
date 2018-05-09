const API = "http://localhost:7000/api";

const headers = {
    "Accept": "application/json"
}

// having curly brackets on the return block broke the function!
export const getAll = () => 
  fetch(`${API}/books`, {headers})
    .then( res => res.json())
      .then( allBooks => allBooks);
