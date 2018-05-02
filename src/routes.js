import React from "react";
import {Route, Switch} from "react-router-dom";

import Layout from "./hoc/layout";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";

class Routes extends React.Component{
    render(){
        return (
            <Layout>
                <Switch>
                    <Route path="/contact" component={Contact} />
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;