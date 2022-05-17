import axios from 'axios';
import { DiscTypes } from '../types/typesindex';

export const fetchDiscs = async () => {
  try {
    const response = await axios.get<DiscTypes[]>(
      'http://localhost:8080/api/discs'
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSingleDisc = async (discId: string) => {
  try {
    const response = await axios.get<DiscTypes>(
      `http://localhost:8080/api/discs/${discId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
