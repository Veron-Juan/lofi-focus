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
