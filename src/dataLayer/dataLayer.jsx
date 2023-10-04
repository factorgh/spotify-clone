/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext,useContext, useReducer } from "react";


const DataLayerContext = createContext();

const DataLayer = ({initialState,reducer,children})=>
    (
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>)

    
 function useData(){
    const context = useContext(DataLayerContext);
    return context;
 }

 export  {DataLayer,useData}