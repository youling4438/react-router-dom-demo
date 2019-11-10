import React from "react";
import { Route, Link } from "react-router-dom";
import Libai from "./poets/Libai";
import Sushi from "./poets/Sushi";
import Luyou from "./poets/Luyou";
import Liqingzhao from "./poets/Liqingzhao";

function Contact() {
    return (
        <div>
            <h3>我是联系</h3>
            <p>
                这是一段联系的描述信息！这是一段联系的描述信息！这是一段联系的描述信息！这是一段联系的描述信息！
            </p>
            <h5>点击下方按钮，切换下面的描述信息</h5>
            <ol>
                <li>
                    <Link to="/contact/libai/">联系李白</Link>
                </li>
                <li>
                    <Link to="/contact/sushi/">联系苏轼</Link>
                </li>
                <li>
                    <Link to="/contact/luyou/">联系陆游</Link>
                </li>
                <li>
                    <Link to="/contact/liqingzhao/">联系李清照</Link>
                </li>
            </ol>
            <Route path="/contact/libai/" component={Libai} />
            <Route path="/contact/sushi/" component={Sushi} />
            <Route path="/contact/luyou/" component={Luyou} />
            <Route path="/contact/liqingzhao/" component={Liqingzhao} />
        </div>
    );
}

export default Contact;
