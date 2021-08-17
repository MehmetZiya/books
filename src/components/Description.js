
import { useState, useContext, useEffect } from 'react' ;
import { useParams, withRouter} from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { BookContext } from '../context/BookContext';
import styles from '../styles/Description.module.css' ;

const Description = (props) => {
    const { addBookToCart } = useContext(CartContext);
    const { books} = useContext(BookContext);
    const { bookId } = useParams();
    const [ book , setBook]= useState(books[bookId]);

    
    useEffect(()=>{
        const selectedBook = books.find((book) => book.id === bookId);
        setBook(selectedBook)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookId]); 
    
    const addToCart = (e) => {
        e.preventDefault();
        addBookToCart(book);
      }

    return ( 
        <>  
            <div className={styles.descUp}>
                <div className={styles.descImg}>
                    <img src={book.img} alt={book.name} />
                </div>
                <div>
                    <h2>{book.name}</h2>
                    <h3>{book.author}</h3>
                    <p>Sayfa Sayisi : {book.pages}</p>
                    <p>Kategori : {book.category}</p>
                    <button onClick ={addToCart}>Add +</button>
                </div>
            </div>
            
            <div className={styles.prg}>
                <p>{book.desc}</p>
            </div>
            
           
        </>
    );
}
 
export default withRouter(Description);