import axios from 'axios';


const BASE_URL = process.env.VUE_APP_BASE_URL
const URLS = {
    register: 'auth/register',
    login: '',
    add_apartment: 'apartment/add',
    social_auth: 'auth/social/auth',
    apartment_all: 'apartment/all',
    apartment_images: 'apartment/images/get?apartment=',
    search_apartment: ''
}



const getReq = async function(urlKey, data){
    const CONFIG = {
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Token a0a0f13691e07795325ae1dd74da487117543464'
        }
    }

    return new Promise((resolve, reject) => {
        let url = BASE_URL
        if(data.url == null){
            url += URLS[urlKey]
        }
        else{
            url += data.url
        }
        
        window.console.log(url)
        axios.get(url, CONFIG)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            window.console.log(err);
            reject(0);
        })
       
    })
}

const postReq = async function(urlKey, data){
    const CONFIG = {
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Token ' + data.token
        }
    }
    window.console.log(data);
    return new Promise((resolve, reject) => {
        let url = BASE_URL + URLS[urlKey]

        axios.post(url, data, CONFIG)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            window.console.log(err);
            reject(0);
        })
        
    
       
    })
}

export{
    postReq,
    getReq
}