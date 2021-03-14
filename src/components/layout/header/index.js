import Nav from "./nav";

const Header = ({ header, headerMenu }) => {
    
    return(
        <header>
            <Nav header={header} headerMenu={ headerMenu }/>
        </header>
    );
}

export default Header;