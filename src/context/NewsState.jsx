import React, { useState } from 'react'
import NewsContext from './NewsContext'

const NewsState = (props) => {
  const [Data, setData] = useState("World");
 

  return (
   <NewsContext.Provider value={{Data,setData}}>
   
   {props.children}

   </NewsContext.Provider>
  )
}

export default NewsState
