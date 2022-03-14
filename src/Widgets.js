import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading} </h4>
                <p>{subtitle}</p>   
            </div>
        </div>
    )


  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>Linkedin NEWS</h2>
            <InfoIcon />
        </div>

        {newsArticle("Papa React is back ", "Top news - 9099 readers")}
        {newsArticle("Corona Virus: UK updates ", "Top news - 886")}
        {newsArticle("Tesla hits new highs", "Cars & auto - 300")}
        {newsArticle("Corona Virus ", "Top news - 9099 readers")}
        {newsArticle("Bitcoin Break $33k", "Crypto - 8000 readers")}
        {newsArticle("Corona Virus ", "Top news - 9099 readers")}
    </div>
  )
}

export default Widgets