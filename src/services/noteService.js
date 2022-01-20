// import Signup from "../pages/signup/Signup";
import AxiosService from "./axioService";

const service = new AxiosService();


let baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';

let headerConfiguration = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}




class NoteService {
  addNote(data) {
    return service.postMethod(`${baseUrl}notes/addNotes`, data, headerConfiguration)
  }

  getNote(data) {
    return service.getMethod(`${baseUrl}notes/getNotesList`, {}, headerConfiguration)
  }

}


export default NoteService