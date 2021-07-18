import { IBooksState } from './../types/types';

const IMG_WIDTH = 145;
const IMG_HEIGHT = 205;

export const getBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const fileType = file.type;
    const reader = new FileReader();
    reader.onloadend = () => {
      const image = new Image();
      image.src = reader.result as string;

      image.onload = () => {
        image.width = IMG_WIDTH;
        image.height = IMG_HEIGHT;
        const canvas = document.createElement('canvas');
        canvas.width = IMG_WIDTH;
        canvas.height = IMG_HEIGHT;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(image, 0, 0, IMG_WIDTH, IMG_HEIGHT);
        }
        const finalFile = canvas.toDataURL(fileType);
        return resolve(finalFile);
      };
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export const initializer = (initialValue: IBooksState) =>
  JSON.parse(localStorage.getItem('books') as string) || initialValue;
