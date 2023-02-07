import React from 'react';

const AppContext=React.createContext()

const AppProvider=({children})=>{
   return<AppContext.Provider value={{fname:"Rezwan",title:"MERN Learner"}}>
      {children}
   </AppContext.Provider>
}

export {AppContext,AppProvider}