import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react"
import app from "../chipa.init";


const useOr = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    // get email
    const handleEmail = (e) => setEmail(e.target.value);

    // get password
    const handlePassword = (e) => setPassword(e.target.value);
    const handleDisplayName = (e) => setDisplayName(e.target.value);
    const submitButton = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                console.log(user);
                // ...
            })
            .catch((error) => {
                console.log(error);
                // ..
            });

    }

    return { email, password, user, handleEmail, handlePassword, handleDisplayName,submitButton };
}
export default useOr;