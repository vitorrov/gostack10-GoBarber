import User from '../models/User';

export default async (req, res, next) => {
  const user = await User.findByPk(req.userId);

  if (!user.provider) {
    return res
      .status(401)
      .json({ error: 'Unauthorized. User is not a provider.' });
  }

  return next();
};
