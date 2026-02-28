import React, { createContext, useState } from "react";
import { foodData } from "./FoodData";

// 1. Context create 
export const DataContext = createContext();

// 2. Provider component 
export const DataProvider = ({ children }) => {

  const [foods, setFoods] = useState(foodData);

  // optional filter function
  const filterByCategory = (category) => {
    if (category === "all") {
      setFoods(foodData);
    } else {
      const filtered = foodData.filter(
        (item) => item.category === category
      );
      setFoods(filtered);
    }
  };

  return (
    <DataContext.Provider
      value={{
        foods,
        setFoods,
        filterByCategory
      }}
    >
      {children}
    </DataContext.Provider>
  );
};