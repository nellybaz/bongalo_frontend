import { getReq, postReq } from '../../api_handler';

const state = {
    token: window.localStorage.getItem("token") || null,
    uuid: window.localStorage.getItem("token") || null,
}


const getters = {
    getToken: (state) => state.token,
    getUuid: (state) => state.uuid,
}


const actions = {
    async register({commit}, data){

        var res =  await postReq('register', data);
        window.console.log(res);
        
    }
}


const mutations = {}

export default{
    state,
    getters,
    actions,
    mutations
}