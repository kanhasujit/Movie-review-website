import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";

const addFavorite = async (req, res) => {
  try {
    const isFavorite = await favoriteModel.findOne({
      user: req.user.id,
      mediaId: req.body.mediaId
    });

    if (isFavorite) return responseHandler.ok(res, isFavorite);

    const favorite = new favoriteModel({
      ...req.body,
      user: req.user.id
    });

    await favorite.save();

    responseHandler.created(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};

const removeFavorite = async (req, res) => {
  try {
    console.log('Removing favorite:', req.params.favoriteId);
    const { favoriteId } = req.params;

    const favorite = await favoriteModel.findOne({
      user: req.user.id,
      _id: favoriteId
    });

    if (!favorite) {
      console.log('Favorite not found:', favoriteId);
      return responseHandler.notfound(res);
    }

    console.log('Removing favorite document:', favorite);
    await favorite.deleteOne();

    responseHandler.ok(res);
  } catch (error) {
    console.error('Error removing favorite:', error);
    responseHandler.error(res);
  }
};

const getFavoritesOfUser = async (req, res) => {
  try {
    const favorite = await favoriteModel.find({ user: req.user.id }).sort("-createdAt");

    responseHandler.ok(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};

export default { addFavorite, removeFavorite, getFavoritesOfUser };