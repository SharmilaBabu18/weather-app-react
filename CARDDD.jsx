import React from 'react'



function Card({city,search,url}) {
  return (
    <div><div className='card'>
    <div className='card-body'>
    <header>
            <h1>{search}</h1>
        </header>
        <div className='sub-block'>
        <div className='img' >
            <img src={url} alt="" width={100} height={100}/>
            </div>
        
        {/*For temperatures*/}
            <div>
            <h2>{city?.main.temp+'\xB0'}C</h2>
            <p>(Feels like {city?.main?.feels_like+'\xB0'}C)</p>
            <h3>{city?.weather[0].description}</h3>
            <div className='sub'>
                <span>Max temp: {city?.main.temp_max+'\xB0'}C  </span>
                <span>  Min temp: {city?.main.temp_min+'\xB0'}C  </span>
            </div>
            
            <p>Humidity: {city?.main?.humidity} </p>
            <icons/>
        </div>
    </div>
</div>
</div>

    </div>
  )
}

export default Card