import { useNavigate } from "react-router-dom";

function EndButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/dashboard');
    }
    return (
        <div className="end">
            <button className="btn btn-primary" onClick={handleClick}>Create Account</button>
        </div>
    )
}

export default EndButton;