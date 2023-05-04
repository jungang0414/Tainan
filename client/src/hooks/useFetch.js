import{ useEffect, useState } from 'react'
import axios from "axios";


 const useFetch = (url) => {
    const [data, setData]=useState([]);//到時候axios要傳入的資料 先存放在useState內
    const [loading,setLoading]=useState(false);//會紀錄連線中情況，之後方便有先載入介面
    const [error, setError] =useState("");
     //如網路錯誤或是url錯誤就會回報錯誤的useState

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true); //來確定連線時成功的開始
            try{
                const response = await axios.get(url);
                //axios.get最重要的資料 且url是feature那邊傳入的/hotels
                setData(response.data);
            }catch(error){
                setError(error)//如果有錯誤也紀錄進去setError State
            }
            setLoading(false);//代表連線時成功的結束
        }
        fetchData();
    })
    return {data,loading, error}
}
export default useFetch