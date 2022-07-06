import './App.css'
import Nav from './Components/NavBar/NavBar.jsx' 
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'

const App = () => {
  return (
<>
    <Nav/>
    <ItemListContainer greeting='hola' />
    <ItemDetailContainer />
</>
    
  );
}

export default App;
