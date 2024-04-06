import axios from "./";



export const Create = async (target, values, title="Create Successfull", isAuth=false) => {

        console.log(`Bearer ${sessionStorage.getItem('xsrf')}`, isAuth);
    try {
        const result = await axios.post(target, values, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                Authorization: isAuth ? `Bearer ${sessionStorage.getItem('xsrf')}` : '',
            }
        });


        console.log(result);

        if(result.status == "200" || result.status == "201") return {
            status: "success",
            title,
            result
        }
    }
    catch(error) {
        console.log(error);

            return {
                status: "error",
                title: "An Error Occured",
                text: "Please check your inputs and try again",
                errors: error?.response?.data?.errors || {}
            };

    }

}