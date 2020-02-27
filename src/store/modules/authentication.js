import { getReq, postReq } from '../../api_handler';


const setRegisteredUserData = function(responseData, {commit}){
    //set window data

    window.localStorage.setItem("token", responseData.data['token']);
    window.localStorage.setItem("uuid", responseData.data['uuid']);
    window.localStorage.setItem("first_name", responseData.data['first_name']);
    window.localStorage.setItem("email", responseData.data['email']);
    

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
    getToken: (state) => state.token,
    getUuid: (state) => state.uuid,
    getFirstName: (state) => state.firstName,
}


const actions = {
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