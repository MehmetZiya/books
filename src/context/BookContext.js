import React ,{ createContext, useState, useEffect } from 'react' ;


export const BookContext = createContext();

const BookContextProvider = (props) => {

    
    const [ books, setBooks ] = useState([]);
    
    useEffect(() =>{
        const fetchBooks = async () => {
          const response = await fetch("https://books-86ab3-default-rtdb.europe-west1.firebasedatabase.app/books.json");
          const responseData = await response.json();
          const loadedBooks = [];
          for( const key in responseData) {
            loadedBooks.push({
              id: key,
              name: responseData[key].name,
              author: responseData[key].author,
              desc: responseData[key].desc,
              img: responseData[key].img,
              pages: responseData[key].pages,
              price: responseData[key].price,
              category : responseData[key].category,
              publisher: responseData[key].publisher,
            })
          }
          setBooks(loadedBooks);
        }
        fetchBooks();
      }, []) ;

    

    const values = { books }       
    return (
        <BookContext.Provider value= {values}  >
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider ;