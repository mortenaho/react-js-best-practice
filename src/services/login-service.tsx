import axios from "axios";

function LoginService(username:string, password:string) {
    return axios.post("http://127.0.0.1:8000/login", { "username": username, "password": password },{
        headers:{
            "Content-Type":"application/json"
        }
    })
}

export default LoginService