import React, {useState} from "react";

const Forms = () => {

    const [email, setEmail] = useState('valor por useState');
    const [password, setPassword] = useState('valor por useState');

    function cambioEmail(e){
        console.log("Cambiando email");
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    
    return (
        <div className="d-flex justify-content-center">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={email} onChange={cambioEmail} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Forms;