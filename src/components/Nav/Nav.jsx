import SearchBar from "../SearchBar/SearchBar";
import Logo from "../ComponentsIMG/Logo";
import { NavLink } from "react-router-dom";


    const Nav = ({ onSearch, setAccess }) => {

        const handleLogOut = () => {
            setAccess(false);
        }

        return (
            <nav class="nav">
            {/* <Logo/> */}
            <button class ="btn btn-dark">
                <NavLink id="btn-nav-link" to='/home'>HOME</NavLink>
            </button>
            <button class="btn btn-dark">
                <NavLink id="btn-nav-link" to='/about'>ABOUT</NavLink>
            </button>
            <button class="btn btn-dark">
                <NavLink id="btn-nav-link" to='/favorites'>FAVORITES</NavLink>
            </button>
            <SearchBar onSearch={onSearch}/>
            <button class="btn btn-outline-secondary" onClick={handleLogOut} >LOG OUT</button>
        </nav>  
        
    )
}

export default Nav;


