import axios from 'axios';


const BASE_URL = process.env.VUE_APP_BASE_URL
const URLS = {
    register: 'auth/register',
    login: '',
}

const CONFIG = {
    header:{
        'Content-type':'application/json',
        'Authorization':'Token '
    }
}

const getReq = async function(urlKey){
    try {
        let url = BASE_URL + URLS[urlKey]
        let req = await axios.get(url,CONFIG);
        let res_data = req.data;

        return res_data;

    } catch (error) {
        return 0;
    }
}

const postReq = async function(urlKey, data){
    window.console.log(data);
    try {
        let url = BASE_URL + URLS[urlKey]
        window.console.log(url);
        let req = await axios.post(url, data, CONFIG);
        let res_data = req.data;

        return res_data;

    } catch (error) {
        return 0;
    }
}

export{
    postReq,
    getReq
}