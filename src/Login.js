import React from 'react';

const Login = (props) => {
    
    const { email, setEmail, emailError, password, setPassword, passwordError, handleLogin, handleSignup, hasAccount, sethasAccount} = props;

    return( 
        <section className="login">
            <div className="loginContainer">
            <label> Correo </label>
            <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
            <p className="errorMsg"> {emailError} </p>
            <label>   Contraseña </label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
            <p className="errorMsg"> {passwordError} </p>

            <div className="btnContainer">
                { hasAccount ? (
                    <>
                    <button className="button-Login " onClick={handleLogin}>abrir sesion</button>
                    <p>No tienes Cuenta? <span onClick={ () => sethasAccount(!hasAccount) } > Registrate </span></p>
                    </>
                ) : (
                    <>
                    <button  className="button-Login " onClick={handleSignup}>Registro</button>
                    <p>Tienes cuenta? <span onClick={ () => sethasAccount(!hasAccount) }>Logeate</span></p>
                    </>
                )}
            </div>

            </div>           
        </section>
    );
};

export default Login;