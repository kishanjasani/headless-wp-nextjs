import Nav from "./nav";

const Header = ({ headerMenu }) => {
    
    return(
        <header>
            <Nav headerMenu={ headerMenu }/>
        </header>
    );
}

export default Header;