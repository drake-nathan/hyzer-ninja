import React from 'react';
import Resizer from 'react-image-file-resizer';

const resizeFile = (file: File) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64'
    );
  });

export const handleImageChange = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (!e.target.files) return;
  try {
    const file = e.target.files[0];
    const image = await resizeFile(file);
    console.log(image);
  } catch (err) {
    console.log(err);
  }
};
