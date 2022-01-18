// import Signup from "../pages/signup/Signup";
import AxiosService from "./axioService";


let baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';
const service = new AxiosService();

class NoteService {
  addNote(data){
      return service.postMethod(`${baseUrl}notes/addNotes`,data)
  }

}


export default NoteService