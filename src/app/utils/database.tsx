import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Pizza = {
  id: number;
  nomePizza: string;
  ingredientiPizza: string;
  prezzo: number;
};

type Store = {
  pizze: Pizza[];
  nextId: number;
  selectedPizza: Pizza | null;
  addPizza: (pizza: Omit<Pizza, 'id'>) => void;
  updatePizza: (id: number, updatedPizza: Partial<Pizza>) => void;
  removePizza: (id: number) => void;
  setSelectedPizza: (pizza: Pizza | null) => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      pizze: [],
      nextId: 1,
      selectedPizza: null,
      addPizza: (pizza) => set((state) => {
        const newPizza = { ...pizza, id: state.nextId };
        return {
          pizze: [...state.pizze, newPizza],
          nextId: state.nextId + 1,
        };
      }),
      updatePizza: (id, updatedPizza) =>
        set((state) => ({
          pizze: state.pizze.map((pizza) =>
            pizza.id === id ? { ...pizza, ...updatedPizza } : pizza
          ),
        })),
      removePizza: (id) =>
        set((state) => ({
          pizze: state.pizze.filter((pizza) => pizza.id !== id),
        })),
      setSelectedPizza: (pizza) => set({ selectedPizza: pizza }),
    }),
    {
      name: "pizza-store", // nome della chiave nel localStorage
      storage: createJSONStorage(() => localStorage), // specifica l'uso del localStorage
    }
  )
);

export default useStore;