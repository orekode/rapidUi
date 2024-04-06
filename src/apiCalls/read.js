import { useQuery } from "react-query";
import axios from "./";

export const useItems = ({ target, params={}, isAuth=false }) => {
    return useQuery([target, params], async () => {

        const response = await axios.get(target, {
            params,
            headers: {
                Authorization: isAuth ? `Bearer ${sessionStorage.getItem('xsrf')}` : '',
            }
        });

        return response.data || response;

    }, {
        staleTime: 10000, // Cache data for 10 seconds
        cacheTime: 60000 * 5,
    });
}

export const useItem = ({ target, params={}, isAuth=false }) => {
    return useQuery([target, params], async () => {

        const response = await axios.get(target, {
            params,
            headers: {
                Authorization: isAuth ? `Bearer ${sessionStorage.getItem('xsrf')}` : '',
            }
        });

        if (response.data && response.data.data && response.data.data.length > 0 ) return response.data.data[0]
        if (response.data && response.data.length > 0 ) return response.data[0]

        return response.data.data || response.data || response;

    }, {
        // staleTime: 10000, // Cache data for 10 seconds
        // cacheTime: 60000 * 25,
    });
}