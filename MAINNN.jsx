import React, { useEffect, useState } from 'react'
import Card from './CARDDD'

import { setFunction } from './ICONSSS';


function Main() {
    const[city,setCity] = useState(null);
    const[search,setSearch] = useState("Mumbai");
    const[icon,setIcon]=useState(null);   
    
useEffect(()=>{
            async function getData(){
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a3c8ed9f270a4ae77470f35d6ecd54ac`;
        try{
            let response = await fetch(api);
            let data= await response.json();
            console.log(data);
                setCity(data)
                if(data?.name){
                    setIcon(data.weather[0].icon)
                }
            
        }catch(error){
            console.log(error.response.data.message);
        }
    }
        getData()
    },[search]);
    console.log(city);


   
 return (
   
        //<button onClick={()=>setToggle(!toggle)}>CLICK</button>
        //{
            //toggle ?  <Card/>:<h1>NOT FOUND</h1>
       // }
        <div>
            <div>
                <h1>WELCOME TO WEATHER APP</h1>
            </div>
            <div>
                <input type='search' placeholder='Searchcity'
                onChange={(e)=>setSearch(e.target.value)}/>
                
            </div>
            {
                city?.name ? 
                (<Card search={search} city={city} url={setFunction(icon)}/>)
                :<div className='city'><h1>CITY NOT FOUND</h1></div>
            }
            
    </div>
  )}


export default Main