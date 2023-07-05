import axios from 'axios';
const headers =  {
    'Content-Type': 'application/json',
    Accept: "application/json",
  }
export  const ApiCall = async(url,method,data) => {
    axios.defaults.headers = headers;
    return await axios[method](url,data) 
    .then(function (response) {
        console.log(response.data)
        return response.data;
    })
    
}