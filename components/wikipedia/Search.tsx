import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Label,Input,Container,RenderedList,Title} from './Styles.wikipedia'

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
            console.log(results)
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
    },[term])
    const renderedItems= results.map((result)=>{
        return (
            <RenderedList key={result.pageid} >
                <div >
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div >
                    <Title>
                        {result.title}
                    </Title>

                    <span dangerouslySetInnerHTML= {{__html:result.snippet}}></span>
                </div>
            </RenderedList>
        );
    })
    return (
    <Container >
        <div >
            <Label>Enter Search Term</Label>
            <Input  onChange = {e=>setTerm(e.target.value)}/>
            
        </div>
        <div>{renderedItems}</div>
    </Container>
    );
}

export default Search;

