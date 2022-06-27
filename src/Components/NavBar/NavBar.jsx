import logo from '../../assets/logo.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'



const Nav =()=>{
    return(
        <header >
            <a href=""><img  src={logo} className="logo" alt="" /></a>
            <nav>
                <ul >
                    <li><a href="">Issues</a></li>
                    <li><a href="">TPBs</a></li>
                    <li><a href="">Omnibuses</a></li>
                    
                </ul>
            </nav>
            <CartWidget/>
          
        </header>
            
        
    )
}

export default Nav