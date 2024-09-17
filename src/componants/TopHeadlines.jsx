import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const TopHeadlines = () => {
    const [News, setNews] = useState([]);
   let getData=async()=>{
    let res=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=268a18c500354dca8bf9a4aa59bdba61`)
    // console.log(res.data.articles)
   setNews(res.data.articles)
  
   }
   useEffect(()=>{
    getData()
  },[])
  


  return (
 
  
    <div>
  {News.map((ele,index)=>{
    return  <h6 key={index} className='mb-3'><Link style={{color:'white'}} to={ele.url}>{ele.title}</Link></h6>
  })}
      
    </div>
  )
}

export default TopHeadlines
