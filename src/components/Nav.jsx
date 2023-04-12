import SearchBar from "./SearchBar";
import Logo from "./componentsimg/Logo";
import { NavLink } from "react-router-dom";


    const Nav = ({ onSearch }) => {

        return (
            <nav class="nav">
            {/* <Logo/> */}
            <button class ="btn-nav">
                <NavLink id="btn-nav-link" to='/home'>HOME</NavLink>
            </button>
            <button class="btn-nav">
                <NavLink id="btn-nav-link" to='/about'>ABOUT</NavLink>
            </button>
            <button class="btn-nav">
                <NavLink id="btn-nav-link" to='/favorites'>Favorites</NavLink>
            </button>
            <SearchBar onSearch={onSearch}/>
            
        </nav>  
    )
}

export default Nav;


