import { create } from "zustand";

const useRecipeStore = create((set) => ({
  favorites: [],
  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((fav) => fav !== id)
        : [...state.favorites, id],
    })),
}));

export default useRecipeStore;
