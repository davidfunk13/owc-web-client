import { useAuth0 } from '@auth0/auth0-react';
import React, { FC, useState, useEffect } from 'react';
import axios from "../utils/axiosInstance";

interface IUseAuthorizedApiProps {
    route: string
    body?: any | unknown
}

const useAuthorizedApi = ({ route, body }:IUseAuthorizedApiProps) => {
    const [data, setData] = useState<any>(undefined);

    const { getAccessTokenSilently } = useAuth0();

    async function apiGet() {
        //token caches ITSELF AND RECALLS AUTOMATICALLY IF IT IS CACHED. IT BELONGS ON EVERY API CALL, WEIRD I KNOW.
        const token = await getAccessTokenSilently();

        const options = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        await axios.get(route, options)
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(err => {
                console.log({ err, });
                setData(err);
            });
    }

    async function apiPost(body: any) {
        //token caches ITSELF AND RECALLS AUTOMATICALLY IF IT IS CACHED. IT BELONGS ON EVERY API CALL, WEIRD I KNOW.
        const token = await getAccessTokenSilently()
       
        const options = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        await axios.post(route, body, options)
            .then(data => {
                console.log(data);
                setData(data.data);
            })
            .catch(err => {
                console.log({ err, });
                setData(err);
            });
    }

    useEffect(() => {
        body ? apiPost(body) : apiGet();

        return () => {
            setData(undefined);
        }
    }, []);

    return [data, setData];
}
export default useAuthorizedApi;