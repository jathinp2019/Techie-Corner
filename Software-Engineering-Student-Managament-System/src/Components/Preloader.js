import React,{useEffect} from 'react'
import './css/preloader.css';
import { preLoaderAnim } from './animation';

const Preloader = () => {

    useEffect(() =>{
        preLoaderAnim()
    },[]);
  return (
    <div className="preloader" >
        <div className='texts-container' >
            <span>Loading  &nbsp; &nbsp; &nbsp;         Content</span>
        </div>
      
    </div>
  )
}

export default Preloader
