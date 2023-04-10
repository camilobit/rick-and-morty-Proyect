import SearchBar from "./SearchBar";
import Logo from "./componentsimg/Logo";
import { NavLink } from "react-router-dom";


    const Nav = ({ onSearch }) => {

        return (
            <nav class="nav">
            <Logo/>
            <button>
                <NavLink to='/home'>HOME</NavLink>
            </button>
            <SearchBar onSearch={onSearch}/>
            <button>
                <NavLink to='/about'>ABOUT</NavLink>
            </button>
            
            
        </nav>  
    )
}

export default Nav;


