import './App.css'
import Nav from './Components/NavBar/NavBar.jsx' 
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
<>
    <Nav/>
    <ItemListContainer greeting='hola' />
</>
    
  );
}

export default App;
