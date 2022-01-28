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

  colorChange(data){
    return service.postMethod(`${baseUrl}notes/changesColorNotes`,data,headerConfig)
  }

  changeArchive(data){
    return service.postMethod(`${baseUrl}notes/archiveNotes`,data,headerConfig)
  }

  deleteNote(data){
    return service.postMethod(`${baseUrl}notes/trashNotes`,data,headerConfig)
  }

  getNote() {
    return service.getMethod(`${baseUrl}notes/getNotesList`,headerConfig)
  }

  getArchiveNote(){
    return service.getMethod(`${baseUrl}notes/getArchiveNotesList`,headerConfig)
  }

  getTrashNote(){
    return service.getMethod(`${baseUrl}notes/getTrashNotesList`,headerConfig)
  }

}


export default NoteService