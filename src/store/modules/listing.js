import firebase from 'firebase';
import { getReq, postReq, deleteReq, putReq } from '../../api_handler';


const state = {
    listing_type: "Apartment",
    what_guest_will_have: "",
    number_of_guest:1,
    number_of_bedroom:0,
    number_of_bathroom:1,
    property_country:"",
    property_address:"",
    property_city:"",
    property_province:"",
    amenities:[],
    extras:[],
    rules:[],
    photos:[],
    description:"",
    title:"",
    mobile_number:"",
    will_update_calender_checkbox:"",
    checkin:"Flexible",
    checkout:"Flexible",
    min_nights:1,
    max_nights:30,
    blocked_dates:[],
    price:0,
    userListing:[]
}

const uploadImages = async function (images, uuid){
   try {
        const downloadedImages = [];
        for(let i=0; i < images.length; i++){
        const imageName = images[i].name;
        // const imageExt = imageName.slice(imageName.lastIndexOf('.'))
        let res = await firebase.storage().ref("property/images/--bongalo_img--" + uuid + "_" + Date.now()+"-bongalo_img-")
        let snapshot = await res.put(images[i])
        let downloadedUrl = await snapshot.ref.getDownloadURL()
        downloadedImages.push(downloadedUrl);
    }
    return downloadedImages
   } catch (error) {
       return 0;
   }
    
}   

const getters = {
    getListingType:(state) => state.listing_type,
    getListingState:(state) => state,
    getUserListing:(state) => state.userListing
}

const actions = {
    setValue({commit}, data){
        commit('setValue', data);
        window.console.log(data);
    },

    async uploadProperty({commit}, data){
        return new Promise(async (resolve, reject) =>{
            let imageUploadRes = await uploadImages(data.images, data.uuid)
            if (imageUploadRes == 0){
                resolve(0)
            }

            // Create amenties comma seperated string
            let amenitiesToSend = ""
            for(let x=0; x < data.info.amenities.length; x++){
                amenitiesToSend += data.info.amenities[x]
                if (x < data.info.amenities.length-1){
                    amenitiesToSend += ","
                }
            }

            let rulesToSend = ""
            for(let x=0; x < data.info.rules.length; x++){
                rulesToSend += data.info.rules[x]
                if (x < data.info.rules.length-1){
                    rulesToSend += ","
                }
            }
            const dataToUpload = {
                "owner":data.uuid,
                "token":data.token,
                "title":data.info.title,
                "description":data.info.description,
                "price":data.info.price,
                "main_image":imageUploadRes[0],
                "available_rooms":data.info.number_of_bedroom,
                "number_of_bathrooms":data.info.number_of_bathroom,
                "max_guest_number":data.info.number_of_guest,
                "is_active":true,
                "is_verified":false,
                "country":data.info.property_country,
                "type":data.info.listing_type,
                "discount":0.2,
                "amenities":amenitiesToSend,
                "rules":rulesToSend,
                "unavailable_from": "1020-01-08",
                "unavailable_to": "1020-02-08",
                "check_in":data.info.checkin,
                "check_out":data.info.checkout,
                "min_nights":data.info.min_nights,
                "max_nights":data.info.max_nights,
                "images": imageUploadRes.slice(1, imageUploadRes.length)
            }
    
            try {
                var res =  await postReq('add_apartment', dataToUpload);
                window.console.log(res);
                if (res.statusCode == 1){
                    window.console.log("uploaded success")
                    resolve(1)
                }
            } catch (error) {
                window.console.log(error)
                reject(0)
            }
        })
    },

    async getUserListing({commit}, data){
        // Data must have uuid, token
        let dataToSend = {
            ...data,
            url:"apartment/show-listing?user="+data.uuid
        }
        return new Promise( async (resolve, reject) => {
            try {
                var res =  await getReq('get_user_listing', dataToSend);
                window.console.log(res);
                if (res.responseCode == 1){
                    // window.console.log(res)
                    commit('setUserListing', res.data)
                    resolve(1)
                }
            } catch (error) {
                window.console.log(error)
                reject(0)
            }
        })
    },

    async deleteUserListing({commit}, data){
        // Data must have uuid, token, apartment
        let dataToSend = {
            ...data,
            url: 'apartment/show-listing?user=' +data.user+"&apartment="+data.apartment
        }
        return new Promise( async (resolve, reject) => {
            try {
                var res =  await deleteReq('delete_user_listing', dataToSend);
                window.console.log(res);
                if (res.responseCode == 1){
                    // commit('setUserListing', res.data)
                    resolve(1)
                }
            } catch (error) {
                window.console.log(error)
                reject(0)
            }
        })
    },

    async updateUserListing({commit}, data){
        // Data must have uuid, token, apartment
        let dataToSend = {
            ...data,
        }
        return new Promise( async (resolve, reject) => {
            try {
                var res =  await putReq('update_user_listing', dataToSend);
                window.console.log(res);
                if (res.responseCode == 1){
                    // commit('setUserListing', res.data)
                    resolve(1)
                }
            } catch (error) {
                window.console.log(error)
                reject(0)
            }
        })
    }

    
}

const mutations = {
    setValue:(state, newData) => (state[newData['key']] = newData['value']),
    setUserListing:(state, newUserListing) => (state.userListing = newUserListing)
}

export default {
    state,
    actions,
    getters,
    mutations
}