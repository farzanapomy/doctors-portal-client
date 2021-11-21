import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { useContext } from 'react';


const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;