
import { React, useState, useEffect } from 'react'
import axios from 'axios'
import Pager from './Pager'

const apiurl=`https://jsonplaceholder.typicode.com/posts`
export default (props) =>
{
   // posts update for API
   var [posts, setStatePosts] =useState([]);
   //select default max posts per action
   var [DefaultMaxDisplayposts] =useState(10);

   //select default max posts per action
   var [DefaulButton,SetStateDefaulButton] =useState(1);

    var lastIndex = DefaulButton * DefaultMaxDisplayposts
    var FirstIndex = lastIndex - DefaultMaxDisplayposts

   // api call by hooks
   useEffect(() => {
            axios.get(apiurl).then((result)=>setStatePosts(result.data))
   }, [])

   var DisplayDefaultButtonPosts = posts.slice(FirstIndex,lastIndex)

   //Total_posts from API
   var totalPosts = posts.length

   let handleButtonNumberChanges=(btnNumber)=>
   {
    SetStateDefaulButton(btnNumber)
   }

   return(<>
           <div className="container-fluid p-2 bg-dark text-white ">
                <h1 className="text-center text-danger p-2"><b>POSTS</b></h1>
                {/*<nav>
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        
                    </ul>
                </nav> */}            
                    {
                        DisplayDefaultButtonPosts.map((res,i)=>
                        {
                            return(<ul key={i}>
                                <li>
                                    <h4>{res.id}{res.title}</h4>
                                    <p>{res.body}</p>
                                </li>

                            </ul>)
                        })
                    }
                <hr />
                <h5>Showing {FirstIndex+1}-{lastIndex} of {totalPosts} result for "Posts" </h5>
                
                    <Pager  totalpostsInAPI={totalPosts} 
                    maxDisplayrecordsPerButton={DefaultMaxDisplayposts}
                    getButtonNumber={(bno)=> handleButtonNumberChanges(bno)} />
           </div>
           
       </>)
}
{/*
<div className="col-lg-3" key={i}>
                                    <div className="card" >
                                        <img src={res.image} className="card-img-top w-100 mx-auto " style={{ height:'200px'}}  />
                                        <div className="card-body text-center">
                                            <h6 className="card-title">{res.title}</h6>
                                            <h5 className="card-title">${res.price}</h5>
                                            <p className="card-text">{res.description.slice(0, 50)}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                         </div>
                                    </div>
                            </div>
*/}