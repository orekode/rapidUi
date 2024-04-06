import { redirect } from "react-router-dom";
import { useAuth } from "../store/general";
import axios from "../apiCalls/index";


export const isCustomer = async () => {
    try {

        const user = await axios.get('user', {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('xsrf')}`
            },
            withCredentials: true,
        });

        if(user?.data?.role == 'customer')
        return { };

        else throw redirect('/login');
    } catch(error) {
        throw redirect('/login');
    } 
}

export const isAdmin = async () => {
    try {

        const user = await axios.get('user', {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('xsrf')}`
            },
            withCredentials: true,
        });

        // console.log('i got here')

        if(user?.data?.role == 'admin')
        return { };

        else throw redirect('/login');
    } catch(error) {
        throw redirect('/login');
    } 
}