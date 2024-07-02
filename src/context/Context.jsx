import { createContext, useState } from "react"; 
import run from "../config/gemini";


export const Context  = createContext();

const ContextProvider = (props)=>{

    const [input,setInput] = useState("")
    const [recentPromt,setRecentPromt]= useState ("")
    const [prevPromts,setPrevPromts] = useState ([])
    const [showResult,setShowResut] =useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] =useState("")

    const delayPara =(index,nextWord)=>{

    }
    const newChat =()=>{
        setLoading(false)
        setShowResut(false)
    }


    const onSent = async (prompt) => {
        setResultData ("")
        setLoading(true)
        setShowResut(true)
        let response;
        if(prompt!== undefined){
            response = await run(prompt)
            setRecentPromt(prompt)
            
        }else{
            setPrevPromts(prev=>[...prev,input])
            setRecentPromt(input)
            response = await run(input)
        }
        
        let responseArray =response.split("**")
        let newResponse=""
        for(let i=0; i< responseArray.length; i++){
            if(i===0 || i%2 !== 1){
                newResponse+= responseArray[i]
            }else{
                newResponse+= "<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br")
        setResultData(newResponse2)
        setLoading(false)
        setInput("")

    }

    
    const contextValue ={
        prevPromts ,
        setPrevPromts ,
        onSent,
        setRecentPromt,
        recentPromt ,
        showResult,
        loading,
        resultData, 
        input,
        setInput,
        newChat
        

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider