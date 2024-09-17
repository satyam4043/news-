import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import NewsContext from '../context/NewsContext'

const Navbar = () => {
  let ctx=useContext(NewsContext)
  console.log(ctx)

  const handleClick=(ans)=>{
  console.log(ans)
  ctx.setData(ans)
  }
  const [item, setitem] = useState('');
  

  const HandleChanger=(e)=>{
    let value=e.target.value
    console.log(value)
    setitem(value)

  }
  const handleSearch=(e)=>{
    e.preventDefault()
    ctx.setData(item)
  }

  return (
    <div>
    <nav className="navbar navbar-expand-lg  navs ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">News app</Link>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
        <li onClick={()=>handleClick('Sports')} className="nav-item">
          <Link className="nav-link" to="#">Sports</Link>
        </li>
        <li onClick={()=>handleClick('Politics')} className="nav-item">
          <Link className="nav-link" to="#">Politics</Link>
        </li>
        <li onClick={()=>handleClick('Finance')} className="nav-item">
          <Link className="nav-link" to="#">Finance</Link>
        </li>
        <li onClick={()=>handleClick('Entertainment')}  className="nav-item">
          <Link className="nav-link" to="#">Entertainment</Link>
        </li>
        <li onClick={()=>handleClick('crime')} className="nav-item">
          <Link className="nav-link" to="#">crime</Link>
        </li>
       
       
      </ul>
      <form className="d-flex" role="search">
        <input onChange={HandleChanger} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
