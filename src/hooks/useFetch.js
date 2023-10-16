import { useEffect, useState } from "react";



export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })
    
    useEffect(() => {
        const getFetch = async () => {
            const  resp = await fetch(url);
            const data = await resp.json();
            setState({
                isLoading: false,
                hasError: null,
                data: data
            });
        }
        getFetch();
    }, [url])
    

    return state;
}
