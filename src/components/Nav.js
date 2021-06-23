import { Link } from "react-router-dom";

function Nav() {

    return(
        <>
        <div className="row">
            <div className="col">
                <h1>ToDo App</h1>
            </div>
            <div className="col">
                <Link to="/add" className="btn btn-primary">Add</Link>
            </div>
        </div>
        </>
    );
}

export default Nav;