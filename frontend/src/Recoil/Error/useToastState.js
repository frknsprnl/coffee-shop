import { useRecoilState } from "recoil";

import { toastState } from "./toastAtom";

export const useToastState = () => {
    const [toastMsg, setToastMsg] = useRecoilState(toastState);

    return {toastMsg, setToastMsg};
}
