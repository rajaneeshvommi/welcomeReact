import React, { useEffect, useState } from 'react';

const ImageBaseURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"

const Item = (props) =>{
  return(
    <div style={{width:200, height:300, padding:10, borderWidth:10, borderColor:'red',justifyContent:'center', alignItems:'center'}}>
       <img src={ImageBaseURL+props.item.info.cloudinaryImageId} style={{with:250, height:200}}/>
      <h3>
        {props.item.info.name}
      </h3>
    </div>
  )
}



function Home() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(()=>{
    const fetchCardData = async() =>{
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.742199&lng=83.3091092&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const data = await response.json();
      console.log(data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setCardsData(data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    fetchCardData();
  },[]);

  return (
    <div>
     <div>Home</div>
     <div style={{display:'flex', flexDirection:'row'}}>
      {cardsData?.map((item) =>{
        return (
          <Item item={item} key={item.info.id}/>
        )
      })}

     </div>
    </div>
  )
}

export default Home;