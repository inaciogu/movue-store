import { api, apiKey } from '.';

export const GET_MOVIES = () => api.get(`trending/movie/week?api_key=${apiKey}&language=pt-BR`);

export const GET_MOVIE_BY_ID = (id: number) => api.get(`movie/${id}?api_key=${apiKey}&language=pt-BR`);
