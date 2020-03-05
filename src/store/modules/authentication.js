import { getReq, postReq } from '../../api_handler';
import firebase from 'firebase';


const setRegisteredUserData = function(responseData, {commit}){
    //set window data

    if(responseData.data.isLogOut){
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("uuid");
        window.localStorage.removeItem("first_name");
        window.localStorage.removeItem("email");
    }
    else{
        window.localStorage.setItem("token", responseData.data['token']);
        window.localStorage.setItem("uuid", responseData.data['uuid']);
        window.localStorage.setItem("first_name", responseData.data['first_name']);
        window.localStorage.setItem("email", responseData.data['email']);
    }
    

    // set app data 

    commit("setToken", responseData.data.token);
    commit("setUuid", responseData.data.uuid);
    commit("setFirstName", responseData.data.first_name);
    commit("setEmail", responseData.data.email);

}

const state = {
    token: window.localStorage.getItem("token") || null,
    uuid: window.localStorage.getItem("uuid") || null,
    firstName: window.localStorage.getItem("first_name") || null,
    email: window.localStorage.getItem("email") || null,
}


const getters = {
    isLoggedIn: (state)=> (state.token && state.token != null),
    getToken: (state) => state.token,
    getUuid: (state) => state.uuid,
    getFirstName: (state) => state.firstName,
}


const actions = {
    async isAuthenticated(){
        // firebase.auth.
    },
    async socialSignin({commit}, data){
      return new Promise((resolve, reject)=>{
        if(data.provider == "google"){
            var provider = new firebase.auth.GoogleAuthProvider();
    
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                window.console.log(user);
                window.console.log(token);
                const userData = {
                    data:{
                        uuid: "uuid",
                        token: token,
                        email: user.email,
                        first_name: user.displayName
                    }
                }
                setRegisteredUserData(userData, {commit});
                resolve(1);
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                window.console.log(error)
                reject(0)
              });
          }
      })
    },
    async register({commit}, data){

        try {
            var res =  await postReq('register', data);
            window.console.log(res);
            if (res.responseCode == 1){
                setRegisteredUserData(res, {commit});
            }
        } catch (error) {
            window.console.log(error);
        }
        
    },

    async logout({commit}, data){
        let logoutData = {
            data:{
                token:null,
                uuid:null,
                first_name:null,
                email:null,
                isLogOut:true
            }
        }
        setRegisteredUserData(logoutData, {commit});
    }
}


const mutations = {
    setToken:(state, newToken) => (state.token = newToken),
    setUuid: (state, newUuid) => (state.uuid = newUuid),
    setFirstName: (state, newFirstName) => (state.firstName = newFirstName),
    setEmail: (state, newEmail) => (state.email = newEmail),

}

export default{
    state,
    getters,
    actions,
    mutations
}