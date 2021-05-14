import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Sessoes from "./Sessoes";
import Assentos from "./Assentos";
import Sucesso from "./Sucesso";

export default function App() {
    return (
        <BrowserRouter>
            <div className="fundo">
                <div className="topo">CINEFLEX</div>

                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/sessoes" exact={true} component={Sessoes} />
                    <Route path="/assentos" exact={true} component={Assentos} />
                    <Route path="/sucesso" exact={true} component={Sucesso} />
                </Switch>

            </div>
        </BrowserRouter>

    );
}