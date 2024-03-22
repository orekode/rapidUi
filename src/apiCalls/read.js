import { useQuery } from "react-query";
import axios from "./";

export const useItems = ({ target, params={} }) => {
    return useQuery([target, params], async () => {

        const response = await axios.get(target, {
            params
        });

        return response.data || response;

    }, {
        staleTime: 10000, // Cache data for 10 seconds
        cacheTime: 60000 * 5,
    });
}

export const useItem = ({ target, params={} }) => {
    return useQuery([target, params], async () => {

        const response = await axios.get(target, {
            params
        });

        return response.data.data || response.data || response;

    }, {
        // staleTime: 10000, // Cache data for 10 seconds
        // cacheTime: 60000 * 25,
    });
}