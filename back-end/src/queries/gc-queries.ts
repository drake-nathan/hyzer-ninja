import { Request, Response } from 'express';
import { hyzerNinjaBucket } from '../services/google-cloud';

interface ImageRequest extends Request {
  body: {
    user: string;
    discId: number;
    newImage: Buffer;
  };
}

export const uploadImage = async (req: ImageRequest, res: Response) => {
  const { user, discId, newImage } = req.body;
  const destFileName = `${user}-${discId}.jpeg`;
  try {
    await hyzerNinjaBucket.file(destFileName).save(newImage);
  } catch (err) {
    res.status(400).send(err);
  }
};
