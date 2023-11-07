import { getUserInfo } from "@/service/auth.service";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../slice/userSlice";
import { useCustomerQuery } from "../api/customersApi";

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState<boolean>();
    const [userId, setUserId] = useState<string>('');
    const [isSkip, setIsSkip] = useState<boolean>(true);
    const { data } = useCustomerQuery(userId, { skip: isSkip });

    useEffect(() => {
        const localAuth: any = getUserInfo();
        if (localAuth && localAuth !== null) {
            setAuthChecked(true)
            setUserId(localAuth.id);
            setIsSkip(false);
            dispatch(userLoggedIn({ ...data }));
        }
    }, [dispatch, data, userId]);

    return !!authChecked;
}