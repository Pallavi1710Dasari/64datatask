import './index.css'
import { Component} from 'react'
import LibraryList from "../mockdata/LibraryList.json";
import LibraryCard from "../LibraryCard";
import Greeting from "../Greeting";
import React from 'react'

class Header extends Component{   
    render(){    
        return(
                <div className="header-container">
                <div className="nav-header">      
                  <Greeting/>
                  <div className='library-card-container'>
                    {LibraryList.map(each=>(
                      <LibraryCard key={each.id} eachItem={each}/>
                    ))}
                  </div>
                </div>
                </div>
        )
    }
}
export default Header


