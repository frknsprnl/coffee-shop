import { useRecoilState } from "recoil";

import { loginState } from "./loginAtom";

export const useLoginState = () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

    return {isLoggedIn, setIsLoggedIn};
}
