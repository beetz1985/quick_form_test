import React from "react";

function App() {


    const [state, setState] = React.useState({
                                    email: "",
                                    password: "",
                                    passwordConfirm: "",
                                    okayToEmail: false
                                })



    function handleChange(e) { 

        const {name, type, value, checked} = e.target;

        setState((s)=>{
            const obj = {...s}
            obj[name] = (type === "checkbox") ? checked : value
            return obj
        }) 

    }

    function handleSubmit(e) {
        e.preventDefault();

        if(state.password !== state.passwordConfirm) {
            console.log("Error, passwords do not match");
            
        } else if(state.email === "" || state.password === "" || state.passwordConfirm === "") {

            console.log("Please fill out all required fields")

        } else if(state.okayToEmail){

            console.log(
                `Succesfully Signed Up, Thankyou for choosing our newsletter`
            )
        } else {
            console.log(
                `Succesfully Signed Up`
            )
        }
    }

    //console.log(state);

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email"
                    name="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="passwordConfirm"
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default App