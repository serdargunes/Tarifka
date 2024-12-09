import {useEffect, useState} from 'react';
import axios from 'axios';

const UseFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try{
            const {data} = await axios.get(url)
            setData(data)
            setLoading(false)

        }catch (error){
            setLoading(false)
            setError(error.message)

        }
    }
    useEffect (() => {fetchData()}, [])
    return (
        {error, data, loading}
    )
}
export default UseFetch;