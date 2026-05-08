// import { v2 as fileup } from "cloudinary"
import { v2 } from "cloudinary";
import { response } from "express";
import fs from "fs";
import multer from "multer"


const upload = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload file on cloud
        const reponse = await v2.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        // file upload
        console.log(`file uploaded: ${reponse.url}`);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove local tmp file on fail
        return null;
    }
}


v2.config({
    cloud_name: process.env.STORAGE_CLOUD_NAME,
    api_key: process.env.STORAGE_API_KEY,
    api_secret: process.env.STORAGE_API_SECRET,
})
