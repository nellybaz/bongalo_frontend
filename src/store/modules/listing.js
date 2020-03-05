import firebase from 'firebase';
import { getReq, postReq } from '../../api_handler';


const state = {
    listing_type:"Apartment",
    what_guest_will_have:"",
    number_of_guest:0,
    number_of_bedroom:0,
    number_of_bathroom:0,
    property_country:"",
    property_address:"",
    property_city:"",
    property_province:"",
    amenities:[],
    extras:[],
    photos:[],
    description:"",
    title:"",
    mobile_number:"",
    will_update_calender_checkbox:"",
    checkin:"",
    checkout:"",
    min_nights:"",
    max_nights:"",
    blocked_dates:[],
    price:0,
}

const uploadImages = async function (images){
    const downloadedImages = [];
    for(let i=0; i < images.length; i++){
        const imageName = images[i].name;
        // const imageExt = imageName.slice(imageName.lastIndexOf('.'))
        let res = await firebase.storage().ref("property/images/" + imageName)
        let snapshot = await res.put(images[i])
        let downloadedUrl = await snapshot.ref.getDownloadURL()
        window.console.log(downloadedUrl)
        window.console.log("downloadedUrl above")
        downloadedImages.push(downloadedUrl);
    }
    return downloadedImages
    // window.console.log(downloadedImages);
    // return downloadedImages;
}   

const getters = {
    getListingType:(state) => state.listing_type,
    getListingState:(state) => state,
}

const actions = {
    setValue({commit}, data){
        commit('setValue', data);
        window.console.log(data);
    },

    

    async uploadProperty({commit}, data){
        let imageUploadRes = await uploadImages(data.images)
        
        window.console.log("finished")
        window.console.log(imageUploadRes)
        window.console.log(data.info)

        const dataToUpload = {
            "owner":"b89e87f3-5f31-4d16-9a9f-26a6d9215df4",
            "title":"New Apartments 44567",
            "description":"best deals ever112",
            "price":23,
            "main_image":"image_url",
            "available_rooms":4,
            "number_of_bathrooms":2,
            "max_guest_number":"4",
            "is_active":true,
            "is_verified":false,
            "country":"Nigeria",
            "type":"Commercial",
            "discount":0.2,
            "amenities":"Toiltet, Parking",
            "location":"Kacyiru",
            "rules":"Free house",
            "unavailable_from": "2020-01-08",
            "unavailable_to": "2020-02-08",
            "check_in":"01:01",
            "check_out":"01:06",
            "min_nights":3,
            "max_nights":10
        }

        // listing_type: "Apartment" >
        // what_guest_will_have: ""
        // number_of_guest: 0
        // number_of_bedroom: 0
        // number_of_bathroom: 0
        // property_country: ""
        // property_address: ""
        // property_city: ""
        // property_province: ""
        // amenities: Array(0)
        // extras: Array(0)
        // photos: Array(0)
        // description: ""
        // title: ""
        // mobile_number: ""
        // will_update_calender_checkbox: ""
        // checkin: ""
        // checkout: ""
        // min_nights: ""
        // max_nights: ""
        // blocked_dates: (...)
        // price: (...)

        try {
            var res =  await postReq('add_apartment', dataToUpload);
            window.console.log(res);
            if (res.responseCode == 1){
                window.console.log("uploaded success")
            }
        } catch (error) {
            window.console.log(error)
        }
    }

    
}

const mutations = {
    setValue:(state, newData) => (state[newData['key']] = newData['value']),
}

export default {
    state,
    actions,
    getters,
    mutations
}