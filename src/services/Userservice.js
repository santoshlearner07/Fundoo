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

  colorChange(data){
    return service.postMethod(`${baseUrl}notes/changesColorNotes`,data,header)
  }
  changeArchive(data){
    return service.postMethod(`${baseUrl}notes/archiveNotes`,data,header)
  }
  deleteNote(data){
    return service.postMethod(`${baseUrl}notes/trashNotes`,data,header)
  }

}

export default UserService