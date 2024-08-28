import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Banner || mongoose.model("Banner", BannerSchema);