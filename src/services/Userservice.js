import AxiosService from "./axioService";

let baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';
const service = new AxiosService();

let header={
  headers: {
      Authorization: localStorage.getItem("token")
  }
}

class UserService {
  registration(data) {
    return service.postMethod(`${baseUrl}user/userSignUp`, data);
  }

  signin(data) {
    return service.postMethod(`${baseUrl}user/login`, data);
  }

  forgot(data) {
    service.postMethod(`${baseUrl}user/reset`, data)
  }

  reset(data) {
    return service.postMethod(`${baseUrl}user/reset-password`, data,header)
  }

}

export default UserService