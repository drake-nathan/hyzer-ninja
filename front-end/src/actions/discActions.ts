import axios from 'axios';
import { IDiscTypesDB, IDiscTypesJS } from '../types/typesindex';

const ROOT_URL = process.env.REACT_APP_BACKEND_URL as string;

export const fetchDiscs = async (userId: number) => {
  if (userId) {
    try {
      const response = await axios.get<IDiscTypesDB[]>(
        `${ROOT_URL}/api/discs/userdiscs/${userId}`
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const response = await axios.get<IDiscTypesDB[]>(`${ROOT_URL}/api/discs`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};

export const fetchSingleDisc = async (discId: string) => {
  try {
    const response = await axios.get<IDiscTypesDB>(
      `${ROOT_URL}/api/discs/${discId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const addDisc = async (disc: IDiscTypesJS) => {
  try {
    const response = await axios.post<IDiscTypesDB>(
      `${ROOT_URL}/api/discs/`,
      disc
    );
    const newDiscId = response.data.disc_id;
    const { status } = response;
    return { status, newDiscId };
  } catch (error) {
    console.error(error);
    return { status: 400 };
  }
};

export const deleteDisc = async (discId: string) => {
  try {
    const response = await axios.delete(`${ROOT_URL}/api/discs/${discId}`);
    const { status } = response;
    return status;
  } catch (error) {
    console.error(error);
    return { status: 400 };
  }
};
