import AxiosService from "./axioService";

const service = new AxiosService();


let baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';

let headerConfig = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

class NoteService {
  addNote(data) {
    return service.postMethod(`${baseUrl}notes/addNotes`, data, headerConfig)
  }

  getNote() {
    return service.getMethod(`${baseUrl}notes/getNotesList`,headerConfig)
  }

}


export default NoteService