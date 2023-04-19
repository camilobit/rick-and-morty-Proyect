/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import validation from "../Validation/Validation"
import imgform from "../imagenes/img_form-sinfondo.png"


const Form = ({ login })=>{
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });


//*****ARRIBA ESTADOS LOCALES*****ABAJO FUNCIONES**********/
    
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }



    return (
        <form class="container-form "  onSubmit={handleSubmit}>
        
        <img class="img-form" src={imgform} />
    <div class="form form-control">
        <>
            <div class="form-control">
                <label htmlFor="email" class="col-sm-2 col-form-label" >Email</label>
                
                <input readonly class="form-control" id="exampleFormControlInput1" placeholder="tu email aquí" type="email" name='email' value={userData.email} onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
                
                
                <label htmlFor="password">Password</label>
                
                <input id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock" type="text" name='password' value={userData.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
                
                
                <button class="buttonForm btn btn-primary mb-3" >Submit</button>
            </div>
        </>
    </div>
        </form>
    )
};


export default Form;