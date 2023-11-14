import express from 'express';
import Banner from '../model/BannerModel.js'; // Adjust the path based on your project structure

const router = express.Router();

// Create a new banner
export const banner= async (req, res) => {
  try {
    const { bannerImage, title, uriLink, bannerInfo } = req.body;
    
    // Validate request body here if needed

    const newBanner = new Banner({
      bannerImage,
      title,
      uriLink,
      bannerInfo,
    });

    const savedBanner = await newBanner.save();
    res.json(savedBanner);
  } catch (error) {
    console.error('Error creating banner:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllBanner = async (req, res) => {
  try {
      const banner = await Banner.find();
      res.json(banner);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default router;
