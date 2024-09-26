import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='food-blog-header'>
        <div className='d-flex align-items-center justify-content-between w-100 px-3'>
           <div>
            <img src={"https://cdn.pixabay.com/photo/2020/07/18/10/33/pasta-5416801_1280.png"} style={{width:"70px"}}/>
           </div>
           <div style={{color: "white", fontSize: "20px", fontWeight: "bold"}}>FOOD BLOG</div>
        </div>
    </div>
  )
}

export default Header