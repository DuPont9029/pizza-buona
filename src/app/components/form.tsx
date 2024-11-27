"use client";

import React, { useState, useEffect } from 'react';
import useStore from '../utils/database';

const Form: React.FC = () => {
  const [nomePizza, setNomePizza] = useState('');
  const [ingredienti, setIngredienti] = useState('');
  const [prezzo, setPrezzo] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  const addPizza = useStore((state) => state.addPizza);
  const updatePizza = useStore((state) => state.updatePizza);
  const selectedPizza = useStore((state) => state.selectedPizza);
  const setSelectedPizza = useStore((state) => state.setSelectedPizza);

  useEffect(() => {
    if (selectedPizza) {
      setNomePizza(selectedPizza.nomePizza);
      setIngredienti(selectedPizza.ingredientiPizza);
      setPrezzo(selectedPizza.prezzo.toString());
      setEditingId(selectedPizza.id);
    }
  }, [selectedPizza]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (editingId !== null) {
      updatePizza(editingId, { nomePizza, ingredientiPizza: ingredienti, prezzo: parseFloat(prezzo) });
    } else {
      addPizza({ nomePizza, ingredientiPizza: ingredienti, prezzo: parseFloat(prezzo) });
    }
    setNomePizza('');
    setIngredienti('');
    setPrezzo('');
    setEditingId(null);
    setSelectedPizza(null);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 text-center">
            Nome pizza
            <input
              value={nomePizza}
              onChange={e => setNomePizza(e.target.value)}
              maxLength={10}
              className="mt-1 block w-full rounded-md border-black-300 focus:border-indigo-500 focus:ring-indigo-500 text-center"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700 text-center mt-4">
            Ingredienti
            <input
              value={ingredienti}
              onChange={e => setIngredienti(e.target.value)}
              className="mt-1 block w-full rounded-md border-black-300 focus:border-indigo-500 focus:ring-indigo-500 text-center"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700 text-center mt-4">
            Prezzo
            <input
              type="text"
              value={prezzo}
              onChange={e => {
                const value = e.target.value.replace(',', '.');
                if (/^\d*\.?\d{0,2}$/.test(value)) {
                  setPrezzo(value);
                }
              }}
              className="mt-1 block w-full rounded-md border-black-300 focus:border-indigo-500 focus:ring-indigo-500 text-center"
            />
          </label>

          <div className="flex justify-center">
            <input
              type="submit"
              value={editingId !== null ? "Update" : "Submit"}
              className="mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;