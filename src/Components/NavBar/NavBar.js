import logo from '../../assets/logo.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import ItemListContainer from '../ItemListContainer/ItemListContainer.js'


const Nav =()=>{
    return(
        <header >
            <a href=""><img  src={logo} class="logo" alt="" /></a>
            <nav>
                <ul >
                    <li><a href="">Issues</a></li>
                    <li><a href="">TPBs</a></li>
                    <li><a href="">Omnibuses</a></li>
                    
                </ul>
            </nav>
            <CartWidget/>
            <ItemListContainer greeting="hola"/>
        </header>
            
        
    )
}

export default Nav