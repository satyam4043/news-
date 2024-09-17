import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TopHeadlines from '../componants/TopHeadlines';
import Pagination from './Pagination';
import NewsContext from '../context/NewsContext';

const Home = () => {
  let ctx=useContext(NewsContext)
  console.log(ctx)

  const [AllNews, setAllNews] = useState([]);
  // console.log(AllNews)
  
     
   let getData=async()=>{
    let ans=await fetch(`https://newsapi.org/v2/everything?q=${ctx.Data}&apiKey=268a18c500354dca8bf9a4aa59bdba61`)
    let data=await ans.json()
    console.log(data.articles
    )
    setAllNews(data.articles
    )
     
   }
   
   useEffect(()=>{
    getData()

   },[ctx.Data])
   
   
  //  Pagination code

  const [currentPage, setcurrentPage] = useState(1);
  let itemperPage=9;
  let lastIndex=itemperPage*currentPage
  let FirstIndex=lastIndex-itemperPage
  let slicedItem=AllNews.slice(FirstIndex,lastIndex)

  

  

  return (
  <div className="row m-0 p-0 ">
    <div className="col-9 bg-dark left">
    <div className='row  d-flex justify-content-center gap-5 m-0 p-0'>
     
     {slicedItem.map((ele,index)=>{
      return <>
         {ele.urlToImage &&<div key={index} className="card card1" style={{width: '18rem'}}>
  <img src={ele.urlToImage} className="card-img-top img" alt="..." />
  <div className="card-body">
    <h5  className="card-title title"> {ele.title}</h5>
    <p className="card-text text"> {ele.
description
}</p>
<div className='div'>
  <div className='some'>
  <Link  to={ele.url} className="btn btn-primary">View News</Link>
  </div>

</div>
   
  </div>
</div>}

      </>
      
  
    
     })}
      

    </div>
    <Pagination AllNews={AllNews} itemperPage={itemperPage} currentPage={currentPage} setcurrentPage={setcurrentPage}/>
    </div>
    <div className="col-3 father">
      <h3 className='text-center bg-danger top'>Top Headlines</h3>
       
       <div className='topHeadlineContainer'>  <TopHeadlines/></div>

    
    </div>


  </div>


  )
}

export default Home
