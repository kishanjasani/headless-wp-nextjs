import Header from "./header"

const Layout = ({ data, children }) => {
    return(
        <div>
            <Header headerMenu={ data?.menus?.headerMenus }/>
            {children}
        </div>
    );
}

export default Layout;  