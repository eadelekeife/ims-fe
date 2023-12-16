import Axios from "axios";

// localhost
// 192.168.0.120
// 172.20.10.2
// https://backend.isadormodelschools.com
// http://192.168.0.120:8000
// http://localhost:8080

const axiosCall = Axios.create({
    baseURL: "http://localhost:8080/api/v1/ims/"
})

export default axiosCall;