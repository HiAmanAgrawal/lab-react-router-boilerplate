import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <div className="container">
            <div className="logo">
                <Link to="/Home">kalvium</Link>
            </div>
            <div className="components">
                <Link to="/Contact">Contact</Link>
                <Link to="/About">About</Link>
            </div>
        </div>
    )
}