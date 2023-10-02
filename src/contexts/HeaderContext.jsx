import { createContext, useState } from "react";

export const HeaderContext = createContext()

export const HeaderProvider = (props) => {
  const [header, setHeader] = useState({tab: "Home", url: "chrisDuckworth > home.html"})
  return (
    <HeaderContext.Provider value={{header, setHeader}}>
      {props.children}
    </HeaderContext.Provider>
  )
}