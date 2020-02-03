import React from 'react';
import styles from './app.module.css';
import withStore from '~/hocs/withStore';


import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';


import routes, { routesMap } from '~/routes';


class App extends React.Component {


    render() {


        let routesComponents = routes.map(route => {
            return <Route
                path={route.url}
                component={route.component}
                exact={route.exact}
                key={route.url}></Route>
        });
        let cart = this.props.stores.cart;
        return (
            <Router>
                <header>
                    <div className="container">
                        <hr />
                        <div className="row justify-content-between">
                            <div className="col col4">
                                <div className="alert alert-success">Site Name</div>
                            </div>
                            
                            <div className="col col-3">
                                <strong>
                                In cart: {cart.cartCnt}
                                <br/>
                                Total: {cart.total}
                                </strong>
                            </div>


                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col col-3">
                            <ul className="list-group">
                                <li className={`list-group-item ${styles.myItem}`}>
                                    <NavLink activeClassName={styles.selected} to={routesMap.home} exact>Home</NavLink >
                                </li>
                                <li className="list-group-item">
                                    <NavLink activeClassName={styles.selected} to={routesMap.cart}>Cart</NavLink >
                                </li>
                                <li className="list-group-item">
                                    <NavLink activeClassName={styles.selected} to={routesMap.order}>Order Now</NavLink >
                                </li>
                            </ul>
                        </div>
                        <div className="col col-9">
                            <Switch>
                                {routesComponents}
                            </Switch>
                        </div>
                    </div>

                </div>
            </Router>

        );
    }
}
export default withStore(App); 