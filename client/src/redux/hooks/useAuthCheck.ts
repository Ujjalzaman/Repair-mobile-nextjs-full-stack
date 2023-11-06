import { getUserInfo } from "@/service/auth.service";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../slice/userSlice";
import { useCustomerQuery } from "../api/customersApi";


export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState<boolean>(true);
    const [userId, setUserId] = useState<string>('');
    const [isSkip, setIsSkip] = useState<boolean>(true);
    const { data } = useCustomerQuery(userId, { skip: isSkip });

    useEffect(() => {
        const localAuth: any = getUserInfo();
        if (localAuth !== null) {
            setUserId(localAuth.id);
            setIsSkip(false);
            dispatch(userLoggedIn({ ...data }));
            setAuthChecked(true)
        }else{
            setAuthChecked(false)
        }
    }, [dispatch, userId, data]);
    return !!authChecked;
}