
import "../App.css";

function Contacto(){
    return(
        <div className="container-fluid bg-warning contacto">
            <form className="w-50 mx-auto">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mensaje</label>
                    <textarea  class="form-control" rows="5" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contacto