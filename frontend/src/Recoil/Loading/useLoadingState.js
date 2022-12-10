import { useRecoilState } from "recoil";

import { loadingState } from "./loadingAtom";

export const useLoadingState = () => {
    const [isLoading, setIsLoading] = useRecoilState(loadingState);

    return {isLoading, setIsLoading};
}
