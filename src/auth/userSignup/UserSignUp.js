import Signup from "../../components/signup_page/Signup";
import { projectAuth } from "../../firebase/config";

let error=null;

const SignUp=async(email, password)=>{
    error=null;

    try{
        const res=await projectAuth.createUserWithEmailAndPassword(email,password);

        if(!error){
            throw new Error("something went wrong");
        }
    }catch (err){
        error=err.message;

    }
    

};
const userSignUp=()=>{
    return {error, SignUp};
};
export default userSignUp;
