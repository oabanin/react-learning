import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";
import Home from "~p/home";
import Page404 from "~p/error404";
import Post from "~p/post";

let routes = [
    {
        name: "home",
        url: '/',
        component: Home,
        exact: true
    },    
    {
        name: "cart",
        url: '/cart',
        component: Cart,
        exact: true
    },
    {
        name: "order",
        url: '/checkout',
        component: Order,
        exact: true
    },
    {
        name: 'result',
        url: '/done',
        component: Result,
        exact: true
    },
    {
        name: 'blogPost',
        url: '/news/:url',
        component: Post,
        exact: true
    },
    {
        url: '**',
        component: Page404
    }
]

let routesMap = {};
routes.forEach(route => {
    if (route.hasOwnProperty('name')) {
        routesMap[route.name] = route.url;
    }
})

let urlBuilder = function (name, params) {
    if (!routesMap.hasOwnProperty(name)) {
        return null;
    }
   
    let url = routesMap[name]; ///news/:url

    for (let key in params) {
        url = url.replace(":" + key, params[key]);
    }

    return url;
}

export default routes;
export { routesMap, urlBuilder };