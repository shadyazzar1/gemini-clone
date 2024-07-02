import React, { useContext, useState } from "react";
import './main.css';
import {assets} from '../../assets/assets'
import onSent, { Context } from "../../context/Context";

const Main =() => {
    const {onSent,recentPromt,showResult,loading,resultData,setInput,input} =useContext(Context)
    return (
        <>
        <div className="main">
            <div className="nav">
                <p>Shady's Gemini</p>
                <img src={assets.user_icon}/> 
            </div>
            <div className="main-container">
                {!showResult ?
                <>
                <div className="great">
                    <p><span>Hello , i am shady</span></p>
                    <p>How can i help you today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>this is my clone of google Gemini</p>
                        <img src={assets.compass_icon}/>
                    </div>
                    <div className="card">
                        <p>you can use it as you can</p>
                        <img src={assets.bulb_icon}/>
                    </div>
                    <div className="card">
                        <p>this is my clone of google Gemini</p>
                        <img src={assets.message_icon}/>
                    </div>
                    <div className="card">
                        <p>this is my clone of google Gemini</p>
                        <img src={assets.code_icon}/>
                    </div>
                </div>
                </>:
                <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon}/>
                        <p>{recentPromt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon}/>
                        {loading
                        ?
                        <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                         :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                        
                    </div>
                </div>
                }
                
                <div className="main-bottom">
                    <div className="searchbox">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter your promt here"/>
                        <div>
                            <img src={assets.gallery_icon}/>
                            <img src={assets.mic_icon}/>
                            <img onClick={()=>onSent()} src={assets.send_icon}/>
                        </div>
                    </div>
                    <p className="bottom-info">Not all answers are correct </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Main 