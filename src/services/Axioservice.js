import axios from "axios";

class AxiosService {
    postMethod(url, data, headers = false) {
        return axios.post(url, data, headers)
    }

    getMethod(url,headers = false) {
        return axios.get(url,headers)
    }

    // deleteMethod(url, data, headers = false) {
    //     return axios.delete(url, data, headers)
    // }
}

export default AxiosService