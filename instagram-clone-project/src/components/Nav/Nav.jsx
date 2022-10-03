import "./Nav.scss"
import SearchBar from "../SearchBar/SearchBar.jsx";

const Nav = () => {

    return (
        <div className="navbar">
            <h1>Instagram</h1>
            <SearchBar className="search_bar"/>
        </div>
    )
}

export default Nav;