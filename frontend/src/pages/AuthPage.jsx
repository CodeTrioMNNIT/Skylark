import SignupCard from "../components/SignUpCard.jsx";
import LoginCard from "../components/LoginCard.jsx";
import { useRecoilValue } from "recoil";
import authScreenAtom from "../../atoms/authAtom.js";

const AuthPage = () => {
    const authScreenState = useRecoilValue(authScreenAtom);
    return(
        <>
        {authScreenState === "login" ? <LoginCard/> : <SignupCard/>}
        </>
    )
}

export default AuthPage;