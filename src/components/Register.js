import EndButton from "./EndButton";

function Register() {
    return (
        <div className="welcome-container" id="reg">
            <h1 className="title" id="create">Create Your<div style={{ padding: "2px" }}></div> PopX account</h1>
            <form className="form" style={{ margin: "0px" }}>
                <div className="form-group">
                    <label for="Full Name" className="boxLabel">Full Name<span className="span">*</span></label><br />
                    <input className="box" type="text" id="Full Name" name="Full Name" placeholder="Marry Doe" required /><br />
                </div>
                <div className="form-group">
                    <label for="Phone Number" className="boxLabel">Phone Number<span className="span">*</span></label><br />
                    <input className="box" type="text" id="Phone Number" name="Phone Number" placeholder="Marry Doe" required /><br />
                </div>
                <div className="form-group">
                    <label for="Email" className="boxLabel">Email address<span className="span">*</span></label><br />
                    <input className="box" type="email" id="Email" name="Email" placeholder="Marry Doe" required /><br />
                </div>
                <div className="form-group">
                    <label for="Password" className="boxLabel">Password<span className="span">*</span></label><br />
                    <input className="box" type="password" id="Password" name="Password" placeholder="Marry Doe" required /><br />
                </div>
                <div className="form-group">
                    <label for="Company Name" className="boxLabel">Company Name<span className="span">*</span></label><br />
                    <input className="box" type="text" id="Company Name" name="Company Name" placeholder="Marry Doe" required /><br />
                </div>
                <div className="form-group" style={{ marginTop: "10px" }}>
                    <span style={{ fontSize: "12px", paddingLeft: "5px" }}>Are you an Agency?<span className="span">*</span></span><br />
                    <div className="radioRow">
                        <label className="radioLabel">
                            <input type="radio" name="btn" />Yes
                        </label>
                        <label className="radioLabel">
                            <input type="radio" name="btn" />No
                        </label>
                    </div>
                </div>

            </form>
            <EndButton/>

        </div>
    )
}

export default Register;