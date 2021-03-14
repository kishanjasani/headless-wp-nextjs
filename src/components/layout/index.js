import Header from "./header"
import Footer from "./footer"

const Layout = ({ data, children }) => {
    return(
        <div>
            <Header header={ data?.header } headerMenu={ data?.menus?.headerMenus }/>
            {children}
            <Footer footer={ data?.footer } />
        </div>
    );
}

export default Layout;  