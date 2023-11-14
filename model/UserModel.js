import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
    profilePhoto: {
        type: String, // Assuming the profile photo is stored as a URL or file path
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    totalConsultants: {
        type: Number,
    },
  
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

export default UserProfile;
