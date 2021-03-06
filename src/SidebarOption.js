import React,{useState,useEffect} from "react";
import "./SidebarOption.css";

function SidebarOption({active,alert,text,Icon}){
  const [alertje,setAlertje]=useState(false)

  useEffect(()=>{
  if(alert){
    setAlertje(true)
  }
  },[])
  
    return(
        <div className={`sidebarOption ${active &&'sidebarOption--active'}`}>
          {alertje?
          <Icon classname="alert"/>:
          <Icon />

          }
          <h2>{text}</h2>
        </div>
    );

    
}

export default SidebarOption;