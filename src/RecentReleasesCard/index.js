import React, { useState } from 'react';
import RecentReleaseData from "../RecentReleaseData"
import newReleaseData from "../mockdata/newReleaseData.json"
import "./index.css"
const RecentReleasesCard=()=>{
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return(
        <div className="recent-release-container">
           <div className="top-card">
                <h1 className="release-heading">Recent Releases</h1>
                <select className='select-option' value={selectedOption} onChange={handleSelectChange}>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="france">France</option>
                </select>
           </div>
           <hr className='hr-line'/>
           {newReleaseData.map(eachItem=>(
            <RecentReleaseData key={eachItem.id} eachItem={eachItem}/>
           ))}
        </div>
    )
}
export default RecentReleasesCard