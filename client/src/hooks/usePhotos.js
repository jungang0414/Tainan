import axios from "axios";
import{ useEffect, useState } from "react";


const usePhotos = (url) => {
    const [photosData, setphotos]=useState([]);//資料存放位置
    const [loading,setLoading]=useState(false); //載入資訊
    const [error, setError] =useState("");

    useEffect(()=>{
        const photosData = async() => {
            setLoading(true);
            try {
                const response = await axios.get(url);
                setphotos(response.data);               
            } catch(error) {
                setError(error)
            }
            setLoading(false);     
        }
        photosData();
    })
    return {photosData,loading, error}
}

export default usePhotos