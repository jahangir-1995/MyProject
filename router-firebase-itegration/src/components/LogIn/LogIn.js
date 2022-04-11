import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h2>This is From Log in JS</h2>
            <div style={{margin: "20px"}}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>

            <form>
               <input type="email" placeholder='Emails' />
               <br />
               <input type="password" name="" id="" placeholder='password' />
               <input type="submit" value="Login" />
           </form>
        </div>
    );
};

export default LogIn;