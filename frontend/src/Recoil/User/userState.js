import { useRecoilState } from "recoil";

import { userState } from "./userAtom";

export const useUserState = () => {
    const [user, setUser] = useRecoilState(userState);

    return {user, setUser};
}
