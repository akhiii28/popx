import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    }
    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className="welcome-container" id="home">
            <div className="bottom-content">
                <h1 className="title">Welcome to PopX</h1>
                <div className="subtitle">Lorem ipsum dolor sit amet,</div>
                <div className="subtitle"> consectetur adipiscing elit,</div>
                <div className="break"></div>
                <button className="btn btn-primary" onClick={handleClick} style={{ marginTop: "25px" }}>Create Account</button>
                <button className="btn btn-secondary"  onClick={handleLogin}>Already Registere? Login</button>
            </div>
        </div>
    );
}

export default Home;