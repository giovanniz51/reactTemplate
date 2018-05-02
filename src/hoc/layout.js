import React from "react";
import "./layout.css";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

class Layout extends React.Component {
    render(){
        return(
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }

}

export default Layout;