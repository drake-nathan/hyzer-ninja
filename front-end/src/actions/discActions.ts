import axios from 'axios';
import { IDiscTypesDB, IDiscTypesJS } from '../types/typesindex';

// const url = process.env.REACT_APP_BACKEND_URL as string;
const url = 'http://localhost:8080';

export const fetchDiscs = async () => {
  try {
    const response = await axios.get<IDiscTypesDB[]>(`${url}/api/discs`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSingleDisc = async (discId: string) => {
  try {
    const response = await axios.get<IDiscTypesDB>(
      `${url}/api/discs/${discId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const addDisc = async (disc: IDiscTypesJS) => {
  try {
    const response = await axios.post<IDiscTypesJS>(`${url}/api/discs/`, disc);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
