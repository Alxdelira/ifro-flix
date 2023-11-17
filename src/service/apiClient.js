import { setupAPIClient } from "./api";

export const api = setupAPIClient();

const getSeriesData = async () => {
    try {
      const response = await api.get('series', {
        params: {
          _limit: 10,
          _fields: 'titulo,sinopse,tumb.url,imagens.url',
        },
      });
  
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter os dados da coleção "series":', error);
      throw error;
    }
  };
  
  getSeriesData();