import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormFilled, setIsFormFilled] = useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/dashboard');
    }
    useEffect(() => {
        if (email && password) {
            setIsFormFilled(true);
        } else {
            setIsFormFilled(false);
        }
    }, [email, password]);
    return (
        <div className="welcome-container" id="login">
            <h1 className="title" id="sign">Signin to your<div style={{ padding: "2px" }}></div> PopX account</h1>
            <form onSubmit={handleLogin}>
                <div style={{ marginLeft: "20px", marginBottom: "10px" }}>
                    <div className="subtitle" style={{ paddingTop: "0px" }}>Lorem ipsum dolor sit amet,</div>
                    <div className="subtitle"> consectetur adipiscing elit,</div>
                </div>
                <div className="form-group" style={{ marginBottom: "2px", marginTop: "-5px" }}>
                    <label for="Email" className="boxLabel">Email address</label><br />
                    <input className="logbox" onChange={e => setEmail(e.target.value)} type="email" id="Email" name="Email" placeholder="Enter email address" required /><br />
                </div>
                <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label for="Password" className="boxLabel">Password</label><br />
                    <input className="logbox" onChange={e => setPassword(e.target.value)} type="password" id="Password" name="Password" placeholder="Enter password" required /><br />
                </div>
                <div className="login-btn">
                    <button className={isFormFilled ? 'btn filled-button' : 'btn btn-third'} type="submit">Login</button>
                </div>
            </form>
        </div>

    )
}

export default Login;