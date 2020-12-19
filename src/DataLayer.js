import React, { createContext, useContext, useReducer } from "React"

// prepares the dataLayer
export const DataLayerContext = createContext(); 

export const DataLayer = ({intitialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, intitialState)}>

  </DataLayerContext.Provider>
)