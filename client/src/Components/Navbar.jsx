import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function Navbar(props) {
    const navigate = useNavigate();
    const x = props.x;

    const handleLogout = async () => {
        try {
            await axios.get("http://localhost:4000/logout", {
                withCredentials: true,
            });
            Cookies.remove("jwt");
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="navbar-brand">Sathyameva Jayathe</div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="nav-item nav-link active">
                            {/* Home<span className="sr-only">(current)</span> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div id="user_name" style={{ color: "aliceblue" }}>
                        {x}
                    </div>
                </div>
                <div>
                    <button className=" btn btn-danger mx-3" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
