//src/store/planetStore.js
import { create } from 'zustand';
import { getPlanets } from '../api/starWarsAPI';

const usePlanetStore = create((set) => ({
  planets: [],
  isLoading: false,
  fetchPlanets: async () => {
    set({ isLoading: true });
    let planets = [];
    let page = 1;
    let data;
    do {
      data = await getPlanets(page);
      planets = [...planets, ...data.results];
      page++;
    } while (data.next);
    set({ planets, isLoading: false });
  },
}));

export default usePlanetStore;
