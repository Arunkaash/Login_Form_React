import React,{useState} from "react";

function Login(){

    // const [fname, setFname] = useState("");
    // const [lname, setLname] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [cpassword, setCpassword] = useState("");

    const [value, setvalue] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        cpassword:"",
    })

    // const InputName =(e) =>{
    //     setFname(e.target.value);
    // }
    // const InputLname =(e) =>{
    //     setLname(e.target.value);
    // }
    // const InputEmail =(e) =>{
    //     setEmail(e.target.value);
    // }
    // const InputPassword =(e) =>{
    //     setPassword(e.target.value);
    // }
    // const InputCpassword =(e) =>{
    //     setCpassword(e.target.value);
    // }

    const handleInputChanges = (e) =>{
        setvalue(
            {
                ...value,
            [e.target.name]:e.target.value
        }
        )
    }

    const submitForm = (e) =>{
        e.preventDefault();
    }
    return(
        <>
            <div className="main_div">
                <div className="form_Container">
                <img src="https://pbs.twimg.com/media/Do902DEXoAAnnaC.jpg" alt="banner"/>
                <form onSubmit={submitForm}>
                     <input type="text" name="fname" value={value.fname} onChange={handleInputChanges} placeholder="First Name" ></input>
                     <input type="text" name="lname" value={value.lname} onChange={handleInputChanges} placeholder="Last Name"></input>
                     <input type="email" name="email" value={value.email} onChange={handleInputChanges} placeholder="Email"></input>
                     <input type="password" name="password" value={value.password} onChange={handleInputChanges} placeholder="Password"></input>
                     <input type="password" name="cpassword" value={value.cpassword} onChange={handleInputChanges} placeholder="Confirm Password"></input>
                     <button type="submit" className="btn">Sign Up</button>
                </form>
            </div>
            </div>
        </>
    );
}

export default Login;