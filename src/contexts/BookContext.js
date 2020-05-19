import React ,{ createContext , useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) =>{
    const [books, setBooks] = useState([
        {title  :"title1" , author : "A1" ,id :1 },
        {title  :"title2" , author : "A2" ,id :2 },
        {title  :"title3" , author : "A3" ,id :3 }
    ]);

    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider