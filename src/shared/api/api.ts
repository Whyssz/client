import axios from 'axios';
import { getContentType } from './api.helper';

export const $api = axios.create({
	baseURL: __API_URL__,
	headers: getContentType(),
});
