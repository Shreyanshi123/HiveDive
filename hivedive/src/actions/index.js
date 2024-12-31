import {auth,provider,storage} from '.firebase.js';

export function signInAPI(){
        return (dispatch) =>{
            auth.signInWithPopup(provider).then((payload)=>{
                console.log(payload);
            }).catch((error)=> alert(error.message));
        };
}
