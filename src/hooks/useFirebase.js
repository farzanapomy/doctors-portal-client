import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";



initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()


    const handleRegister = (email, password, name, history) => {

        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setError('')
                const newUser = { email, displayName: name };
                setUser(newUser)
                console.log(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });


                history.replace('/')
            })
            .catch((error) => {
                setError(error.message);
            })

            .finally(() => {
                setIsLoading(false)
            })
    }


    const handleLoginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const signinWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setError('')
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            })

    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unSubscribe;

    }, [])


    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
        })
            .finally(() => {
                setIsLoading(false)
            })

    }




    return {
        user,
        error,
        handleRegister,
        signinWithGoogle,
        isLoading,
        handleLoginUser,
        logOut


    }
};

export default useFirebase;