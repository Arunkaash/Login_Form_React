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
    const[err, setErr] = useState(false)
    const[errText, setErrtext] = useState('')
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
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!value.fname|| !value.lname||!value.email||!value.password||!value.cpassword){
            setErr(true);
            setErrtext('Some entries are missing');
        }
        else if(value.fname.length < 2){
            setErr(true);
            setErrtext('name should be greater than 2 values');
        }
        else if(value.password!== value.cpassword){
            setErr(true);
            setErrtext('Password not matched');
        }
        else{
            setErr(false)
        }


    }

    return(
        <>
            <div className="main_div">
                <div className="form_Container">
                <img src="https://pbs.twimg.com/media/Do902DEXoAAnnaC.jpg" alt="banner"/>
                <form >
                     <input type="text" name="fname" value={value.fname} onChange={handleInputChanges} placeholder="First Name" ></input>
                     <input type="text" name="lname" value={value.lname} onChange={handleInputChanges} placeholder="Last Name"></input>
                     <input type="email" name="email" value={value.email} onChange={handleInputChanges} placeholder="Email"></input>
                     <input type="password" name="password" value={value.password} onChange={handleInputChanges} placeholder="Password"></input>
                     <input type="password" name="cpassword" value={value.cpassword} onChange={handleInputChanges} placeholder="Confirm Password"></input>
                     {err?<div className="errmsg">{errText}r</div>:null}
                     <button type="submit" onClick={handleSubmit} className="btn">Sign Up</button>
                </form>
            </div>
            </div>
        </>
    );
}

export default Login;