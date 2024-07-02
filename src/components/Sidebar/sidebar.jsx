import React, { useContext, useState } from "react";
import './Sidebar.css';
import {assets} from '../../assets/assets'
import { Context } from "../../context/Context";

const Sidebar =() => {

const[extended ,setExtended] = useState(false)
const{onSent,prevPromts,setRecentPromt,newChat} = useContext(Context)

const loadprompt = async (prompt)=>{
    setRecentPromt(prompt)
    await onSent(prompt)
}
    return (
        <div className="sidebar">
           <div className="top">
            <img onClick ={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt=""/>
            <div onClick={()=>newChat()}  className="new-chat">
                <img src={assets.plus_icon}/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended ?<div className="recent">
                <p className="recent-title">Recent</p>
                {prevPromts.map((item,index)=>{
                    return(
                        <div onClick={()=>loadprompt(item)} className="recent-entery">
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)}</p>
                </div>
                    )

                })}
                
            </div>:null}
            
           </div>
           <div className="bottom">
           <div className="bottom-item recent-entery">
            <img src={assets.question_icon} alt="" />
            {extended?<p>Help</p>:null}
            
           </div>
           <div className="bottom-item recent-entery">
            <img src={assets.history_icon} alt="" />
            {extended?<p>Activity</p>:null}
           </div>
           <div className="bottom-item recent-entery">
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Setting</p>:null}
            
           </div>
           </div>
        </div>
    )
}

export default Sidebar 