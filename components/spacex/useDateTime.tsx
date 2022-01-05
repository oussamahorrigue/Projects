import React,{useState} from "react";

interface State{
    time:number | string
}

const useDateTime=()=>{

    let showdate=new Date();
    let time = showdate.toLocaleTimeString();
    const [CurrentTime,setCurrentTime]=useState<State['time']>(time)
    const displaytodayasdate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();

    const UpdateTime=()=>{
        time=new Date().toLocaleTimeString();
        setCurrentTime(time)
    }
    setInterval(UpdateTime,1000)

    return{displaytodayasdate,CurrentTime};
}
export default useDateTime;



