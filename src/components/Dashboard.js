import profileImg from './image.jpg'
import { FaCamera } from 'react-icons/fa';

function Dashboard() {
    return (
        <div className="welcome-container" id="dash">
            <div className="dashtitle">
                Account Settings
            </div>
            <div className="dashcontent">
                <div className='profile-container'>
                    <img src={profileImg} alt='profile' className='img' />
                    <button className='camera-icon'><FaCamera className="camera"/></button>
                </div>
                <div>
                    <span style={{
                        fontWeight: "bold",
                        fontSize: "12px"
                    }}>Marry Doe</span>
                    <br />
                    <span style={{
                        fontSize: "12px"
                    }}>Marry@Gmail.Com</span>
                </div>
            </div>
            <div style={{
                paddingLeft:"20px",
                paddingRight:"10px",
                fontSize:"12px",
                lineHeight:"1.6",
                fontWeight:"500"
            }}>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
                Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
                Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </div>
            <hr className='line'/>
            <hr id='line2'/>
        </div>
    );
}

export default Dashboard;  