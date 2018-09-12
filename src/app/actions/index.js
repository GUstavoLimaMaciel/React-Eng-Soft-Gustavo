import { SEND_REQUEST } from './types';

export const sendRequest = (dados) => ({ type: SEND_REQUEST, dados: dados });
