import { Repository } from './api.d'
import type { AxiosStatic } from 'axios';
const axios = require('axios') as AxiosStatic;

// routes
const GoDaddyReposRoute = 'https://api.github.com/orgs/godaddy/repos'

export const repositories = {
  index: async (): Promise<Repository[]> => {
    const { data } = await axios.get<Repository[]>(GoDaddyReposRoute);
    return data;
  }
}
