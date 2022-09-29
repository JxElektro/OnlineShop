import  { CartProvider }  from  './Context/CartContext' ;
import './App.css';
import NavBar from './Components/NavBar';


// Componente principal
function App() {
  return (
    <CartProvider>
    <NavBar />
    </CartProvider>
  );
}

export default App;
