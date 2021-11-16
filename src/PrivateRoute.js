import Layout from "antd/lib/layout/layout";
import { Redirect, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    const render = (props) => !!isAuthenticated
        ? (<>
            <Navbar />
            <Layout className="feature">
                <Component {...props} />
            </Layout>
        </>)
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
    
    return (<Route {...rest} render={render}/>);
};

export default PrivateRoute;