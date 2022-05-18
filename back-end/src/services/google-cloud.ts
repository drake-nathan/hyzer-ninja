import { Storage } from '@google-cloud/storage';
import path from 'path';

const gc = new Storage({
  keyFilename: path.join(
    __dirname,
    '../../massive-woods-350619-5e7bb40e1d3f.json'
  ),
  projectId: 'massive-woods-350619',
});

export const hyzerNinjaBucket = gc.bucket('hyzer-ninja');
