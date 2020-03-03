const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


// Function should create thumbnails for the images, it should resize it 
exports.uploadImages = functions.https.onRequest((request, response) => {
    if(request.method == "POST"){
        response.status(200).json({
            "message":"correct method"
        }).send();
    }
    else{
        response.status(400).json({
            "message":"wrong method"
        }).send();
    }
});
