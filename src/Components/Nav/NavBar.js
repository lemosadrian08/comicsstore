import logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { style } from '@mui/system';
import './NavBar.css'


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
            <ShoppingCartIcon/>
        </header>
            
        
    )
}














export default Nav