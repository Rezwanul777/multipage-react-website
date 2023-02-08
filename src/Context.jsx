import React, { useContext, useDeferredValue, useReducer } from 'react';
import Reducer from './Reducer';

const AppContext=React.createContext()

const API = "https://thapareactapi.up.railway.app";

const initialState={
   name:"",
   image:"",
   services:[]

}


const AppProvider=({children})=>{
   const [state,dispatch]=useReducer(Reducer,initialState)
   const updateHomePage=()=>{
      return dispatch({
         type:"HOME_UPDATE",
         payload:{
            name:"REZ TECH",
             image:"./images/hero.svg"
         }
      })
   }
   
   const updateAboutPage=()=>{
      return dispatch({
         type:"ABOUT_UPDATE",
         payload:{
            name:"Rezwanul",
             image:"./images/about1.svg"
         }
      })
   }

   // to get API DATA
   const getServices=async(url)=>{
      try{
      const res=await fetch(url)
      const data=await res.json()
      d
      dispatch({type:"GET_SERVICES",payload:data})
      }catch(error){
         console.log(error)
      }
   }

   //to call the Api

   useEffect(() => {
     
   getServices()
    
   }, [])
   

   return<AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
      {children}
   </AppContext.Provider>
}

// custom hook
const useGlobalContext=()=>{
   return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext}