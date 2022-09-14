import React,{useState,useEffect} from 'react'
import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';

const Pages = () => {
    const [data,setData] = useState([]);
    const [perpage,setPerpage] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then (
          res => {setData(res.data);setPerpage(res.data.slice(0,10));}
    )

   },[])
   const pageHandler = (pageNumber) => {
    setPerpage(data.slice((pageNumber*10)-10,pageNumber*10));
   }
  return (
    <div className="App">
        {data.length>=1?
        <div>
            <center>
            {perpage.map(post => <div className="post">{post.title}</div>)}<br/>
            <Pagination data={data} pageHandler={pageHandler}/>
            </center>
        </div>
        :
        <p>Data Not Loaded</p>
    }
      <Link to='/pages'>Pages</Link><br/>
      <Link to='/'>HomePage</Link>
    </div>
  )
}

export default Pages
