import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
    let noofBtn=Math.ceil(props.AllNews.length/props.itemperPage)
    let buttonArr=[...Array(noofBtn+1).keys()].slice(1)
    console.log(buttonArr)

   const handleIncrement=()=>{
     if(props.currentPage<props.AllNews.length+1){
        props.setcurrentPage(props.currentPage+1)
     }
   }
   const handleDecrement=()=>{
    if(props.currentPage>1){
        props.setcurrentPage(props.currentPage-1)
    }
   }
  return (
    <div>
        <nav aria-label="Page navigation example">
  <ul className="pagination flex-wrap">
    <li onClick={handleDecrement} className="page-item"><Link className="page-link" to="#">Previous</Link></li>
    

    {
        buttonArr.map((ele,index)=>{
            return <li key={index} onClick={()=>props.setcurrentPage(ele)} className={ele===props.currentPage?"page-item active":"page-item"}><Link className="page-link" to="#">{ele}</Link></li>
        })
    }
   
    <li onClick={handleIncrement} className="page-item"><Link className="page-link" to="#">Next</Link></li>
  </ul>
</nav>
      
    </div>
  )
}

export default Pagination
