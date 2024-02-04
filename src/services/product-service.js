import axios from "axios";

function GetProducts() {
    return axios.get("http://127.0.0.1:8000/products",{
        headers:{
            "Content-Type":"application/json"
        }
    })
}

export default GetProducts