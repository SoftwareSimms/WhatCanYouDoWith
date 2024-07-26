import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const fetchUseCases = (query) => api.get(`/usecases?query=${query}`);
export const fetchConcreteNouns = (useCaseId) => api.get(`/concretenouns?usecase=${useCaseId}`);
export const fetchResources = (nounId) => api.get(`/resources?noun=${nounId}`);
