

class AuthenticationService{

    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser', username)
    }
   logout(){

        sessionStorage.removeItem('authenticatedUser');
   }

   isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')

       return user !== null;


   }

}// end class

export default new AuthenticationService()