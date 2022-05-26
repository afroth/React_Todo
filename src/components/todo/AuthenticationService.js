

class AuthenticationService{
    // login was successful so we add a session to the browser.
    registerSuccessfulLogin(username,password){

        sessionStorage.setItem('authenticatedUser', username)
    }

    //------------------------------------------------------------------------------------
    // removes the user session from the browser
   logout(){

        sessionStorage.removeItem('authenticatedUser');
   }

   //------------------------------------------------------------------------------------
   // checks if there is a user session stored in the browser
   isUserLoggedIn(){

        let user = sessionStorage.getItem('authenticatedUser')
        // returns true or false based on if there is a session in browser stored
       return user !== null;
   }

   //------------------------------------------------------------------------------------
   // retrieves the logged-in users username
   getLoggedInUserName(){

       let user = sessionStorage.getItem('authenticatedUser')
       // null username return empty string
       if (user === null) return ""
       // return the users username
       return user
   }


}// end class

export default new AuthenticationService()