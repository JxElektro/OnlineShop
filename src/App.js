import  { CartProvider }  from  './Context/CartContext' ;
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

// Componente principal
function App() {
  return (
    <CartProvider>
    <NavBar />
    <Footer />
    </CartProvider>
  );
}

export default App;
