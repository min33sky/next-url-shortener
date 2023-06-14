import { create } from 'zustand';

interface BaseStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
  shortLink: string; //? 완성된 단축 링크
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
