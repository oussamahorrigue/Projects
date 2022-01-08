import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {SearchBar,Items,AncorContainor,Title} from './Style.wikipedia';
const Search =()=>{

    const [term , setTerm] = useState('program')
    const [results , setresult]= useState([])

    useEffect(()=>{
        const response = async ()=>{
            const donnees= await axios.get("https://en.wikipedia.org/w/api.php",
            {
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term
                }
            }
            )
            setresult(donnees.data.query.search)
        }

    if ((term) && !(results.length)){

        response();;
    }  
    else{

        const TimeroutId=setTimeout(()=>{
            if (term){
                response();
            }
        },500)
        return ()=>{
            clearTimeout(TimeroutId)
        }

    }  
    },[term,results.length])
    const renderedItems= results.map((result)=>{
        return (
            <Items key={result.pageid} >
                <AncorContainor >
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target='__blank'>Go</a>
                </AncorContainor>
                <div >
                    <Title>
                        {result.title}
                    </Title>

                    <span dangerouslySetInnerHTML= {{__html:result.snippet}}></span>
                </div>
            </Items>
        );
    })
    return (
    <div >
        <SearchBar>
            <label>Enter Search Term</label>
            <input placeholder='Search Wikipedia' onChange = {e=>setTerm(e.target.value)}/>
        </SearchBar>
        <div>{renderedItems}</div>
    </div>
    );
}

export default Search;

