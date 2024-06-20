const cloudinary = require('cloudinary');


cloudinary.config({
    cloud_name:"dejw59krs",
    api_key:"421419147836842",
    api_secret: "a2p8tLbU3D7wOMT5dJPkXSK0NsA",
});
// Cloudinary image upload

async function uploadImage(banner) {
    console.log(banner)
    try {
        console.log("entered")
        const result = await cloudinary.uploader.upload(banner, {
            folder: 'MEDATA/UserReports',
        });
        console.log("Exited")
        return result.secure_url;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to upload image');
    }
}

module.exports={uploadImage}
