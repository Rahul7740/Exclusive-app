// import { createContext, useContext, useEffect, useState } from "react";

// const Themecontext = createContext();

// export const ThemeProvider = ({ children  }) => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     document.body.classList = theme;
//   });

//   const modebtn = () => {
//     setTheme((pre) => (pre === "light" ? "dark" : "light"));
//   };

//   return (
//     <>
//       <Themecontext.Provider value={{ theme, modebtn }}>
//         {children}
//       </Themecontext.Provider>
//     </>
//   );
// };

// export const useTheme = () => useContext(Themecontext);


import React, { createContext, useContext, useState } from 'react'
const themeContext = createContext();


export const ThemeProvider = ({children}) => {
    const modebtn = ()=>{
        
    }

    const [theme, setTheme] = useState(false)
  return (
    <themeContext.Provider value={theme}>
        {children}
    </themeContext.Provider>
  )
}



export const useTheme = ()=> useContext(themeContext);
