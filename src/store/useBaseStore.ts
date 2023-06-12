import { create } from 'zustand';

interface BaseStore {
  loading: boolean;
  errorMessage: string;
  setLoading: (loading: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
  shortLink: string;
  setShortLink: (shortLink: string) => void;
}

const useBaseStore = create<BaseStore>((set, get) => ({
  loading: false,
  errorMessage: '',
  setLoading: (loading: boolean) => set(() => ({ loading })),
  setErrorMessage: (errorMessage: string) => set(() => ({ errorMessage })),
  shortLink: '',
  setShortLink: (shortLink: string) => set(() => ({ shortLink })),
}));

export default useBaseStore;
