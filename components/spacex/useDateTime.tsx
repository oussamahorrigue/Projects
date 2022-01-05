import React,{useState} from "react";



const useDateTime=()=>{

    let showdate=new Date();
    let time = showdate.toLocaleTimeString();
    const [CurrentTime,setCurrentTime]=useState<string | number>(time)
    const displaytodayasdate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();

    const UpdateTime=()=>{
        time=new Date().toLocaleTimeString();
        setCurrentTime(time)
    }
    setInterval(UpdateTime,1000)

    return{displaytodayasdate,CurrentTime};
}
export default useDateTime;



