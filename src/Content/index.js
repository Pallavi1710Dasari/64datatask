import "./index.css"
import BussinessList from "../mockdata/BussinessList.json"
import Carousel from "../Carousel";
import ListOfCards from "../ListOfCards";
import React, { useState } from 'react';

const Content = () => {
    const [listAllItems, setState] = useState(false)
    return (
        <div className="content-container">
            <div className="carousel-container">
                {listAllItems ? <ListOfCards /> : <Carousel />}
            </div>
            <div className='list-all-btn'>
                <button onClick={() => setState(prevState => !prevState)} className='btn'>{listAllItems ? "View Less" : "View More"}</button>
            </div>
        </div>
    )
}
export default Content



