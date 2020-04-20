import React, { useState, createContext, useEffect } from "react";


export const Context = createContext({});

export const Provider = (props) => {
    const [ partnerstvaForma, setPartnerstvaForma] = useState(false);
    const [ navbarBtnForma, setNavbarBtnForma]= useState(false);
const generalData = {
    partnerstvaForma,
    setPartnerstvaForma,
    navbarBtnForma,
    setNavbarBtnForma
}
    return (
        <Context.Provider value={generalData}>
            {props.children}
        </Context.Provider>
    )
}