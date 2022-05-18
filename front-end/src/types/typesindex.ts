export interface IDiscTypesDB {
  disc_id: number;
  title: string;
  brand: string;
  type: string;
  mold: string;
  base_plastic: string;
  sub_plastic: string;
  run: string;
  condition: number;
  price: number;
  image_url: string;
}

export interface IDiscTypesJS {
  title: string;
  brand: string;
  type: string;
  mold: string;
  basePlastic: string;
  subPlastic?: string;
  run?: string;
  condition: number;
  price: number;
  imageUrl: string;
}
