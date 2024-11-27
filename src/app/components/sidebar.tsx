"use client"

import React from 'react';
import useStore from '../utils/database';

const Sidebar: React.FC = () => {
  const { pizze, setSelectedPizza, removePizza } = useStore();

  return (
    <div className="w-full md:w-1/4 bg-gray-100 p-4 h-screen">
      {pizze.map((pizza) => (
        <div
          key={pizza.id}
          className="mb-4 p-4 bg-white rounded shadow flex justify-between items-center cursor-pointer"
          onClick={() => setSelectedPizza(pizza)}
        >
          <div>
            <h2 className="text-xl font-bold mb-2">{pizza.nomePizza}</h2>
            <p className="mb-2">{pizza.ingredientiPizza}</p>
            <p className="mb-2">{pizza.prezzo} €</p>
          </div>
          <button
            className="ml-4 text-red-500 hover:text-red-700"
            onClick={(e) => {
              e.stopPropagation();
              removePizza(pizza.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;