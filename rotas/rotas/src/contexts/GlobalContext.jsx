import { createContext, useState } from "react";


export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    let usuarioLogado = 'Jhon Doe'
    const [usuarios, setUsuarios] = useState([

{
    id: Date.now(),
    nome: "Aleksei Ivanov",
    email:"erickteste@gmail.com"
},

{
    id: Date.now()+1,
    nome: "Ekaterina Sokolova",
    email:"erickteste+2@gmail.com"
},
{
    id: Date.now()+2,
    nome: "Dmitri Petrov",
    email:"erickteste+33@gmail.com"
},


    ])

    return (
        <GlobalContext.Provider value={{usuarioLogado, usuarios, setUsuarios}}>

        {children}

        </GlobalContext.Provider>
    )


}