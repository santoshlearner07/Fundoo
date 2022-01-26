import { useState } from "react";

// export default function useAuth(initialValue) {
   
    const Auth ={
        isAuthenticated :false,
        authenticated(){
            this.isAuthenticated = true;
        },
    
        signout(){
            this.isAuthenticated = false;
        },
        getAuth (){
            return this.isAuthenticated;
        }
    };
    


// }
export default Auth;







 // const [isAuth, setIsAuth] = useState(initialValue);
    // function login() {
    //     setTimeout(()=>{
    //         setIsAuth(true);
    //     }, 1000)
    // }

    // function logout() {
    //     setTimeout(()=>{
    //         setIsAuth(false);
    //     }, 1000)
    // }
    // return[isAuth,login, logout];