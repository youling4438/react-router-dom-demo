import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function AppRouter() {
    return (
        <Router>
            <h3>react router demos</h3>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/contact">联系我们</Link>
                </li>
                <li>
                    <Link to="/about">关于我们</Link>
                </li>
            </ul>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    );
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));
