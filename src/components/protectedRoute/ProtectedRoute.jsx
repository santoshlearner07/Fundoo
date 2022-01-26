import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../../services/Auth";
// const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
//     return (
//         <Route {...rest} render={(props) => {
//                 if (auth) return <Component {...props} />;
//                 if (!auth) return (
//                     <Redirect to={{ path: "/signin", state: { from: props.location } }} />
//                 );
//             }}
//         />
//     );
// }
// console.log("Protected route")
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => localStorage.getItem('token') ? (<Component {...props}/>) : (
            <Redirect to={{ pathname: '/' }} />
        )}
    />
);
// console.log("Protected route -2")
export default ProtectedRoute;
