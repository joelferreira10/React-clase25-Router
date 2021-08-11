
import { BrowserRouter , Switch , Route,Link } from 'react-router-dom';
import Blog from './component/Blog';
import Contacto from './component/Contacto';
import Inicio from './component/Incio';
import './App.css';
import logo from './component/img/header-simpsons.gif'

function App() {

  return (
   <div className="container-fluid mt-3 principal"> 
   <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-info fs-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-2"><img src={logo}height="50px" alt="Logo"></img> Inicio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/blog" className="nav-link active" aria-current="page">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link active" >Contacto</Link>
            </li>
            </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>

    <Switch>
      
      <Route path="/" exact>
            <Inicio/>Inicio
      </Route>

      <Route path="/blog">
          <Blog/>Blog
      </Route>

      <Route path="/contacto">
          <Contacto/>Contacto
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
    /* 
    <Link to="/" className="btn btn-info">
    Inicio
    </Link>
    <Link to="/contacto" className="btn btn-info">
      Contacto
    </Link>

    <Link to="/nosotros" className="btn btn-info">
      Nosotros
    </Link>

      <Switch>

        <Route path="/" exact>
          <h1>Inicio</h1>
        </Route>
        <Route path="/contacto">
          <h1>Contacto</h1>
        </Route>
        <Route path="/nosotros">
          <h1>Nosotros</h1>
        </Route>
      </Switch>
    </BrowserRouter> */
   
    
  );
}

export default App;
