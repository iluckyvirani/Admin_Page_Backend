import UserProfile from "../model/UserModel.js";

export const register = async (req, res) => {
    try {
        const newUserProfile = await UserProfile.create(req.body);
        res.json(newUserProfile);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const users = await UserProfile.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

