import create from 'zustand';

type User = {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
};


type AuthStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));

type FavoriteItem = {
    name: string
    artist: string
    cover: string
};

type FavoriteStore = {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  setFavorites: (favorites: FavoriteItem[]) => void;
};

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  addFavorite: (item) => set((state) => ({ favorites: [...state.favorites, item] })),
  setFavorites: (favorites) => set({ favorites }),
}));