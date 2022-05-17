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
