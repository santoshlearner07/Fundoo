import AxiosService from "./axiosService";

const service= new AxiosService();

// let baseUrl : 'http://fundoonotes.incubation.bridgelabz.com/api/';


class UserService{
    registration(data){
       return service.postMethod(`http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`,data);

    }
    // login(data){
    //     return service.postMethod(`http://fundoonotes.incubation.bridgelabz.com/api/user/login`,data);
 
    //  }


}


export default UserService