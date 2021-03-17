
import BookList from "./components/BookList"
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
            <BookList />
      </BookContextProvider>
      
    </div>
  );
}

export default App;
