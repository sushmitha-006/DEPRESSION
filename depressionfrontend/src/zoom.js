import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import './zoom.css';

const Zoom = () => {
    const [value,setValue]=useState();
    const navigate=useNavigate()
    const handleJoinRoom=useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value])
    return (
        <div>
            <h1> Connect with People: </h1>
            <input value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text" 
            placeholder="Enter the Room Code"/>
            <button onClick={handleJoinRoom}> Join </button>
        </div>
      );
    };
    
    export default Zoom;