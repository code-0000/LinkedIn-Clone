import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widget__article'>
            <div className='widget__articleleft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widget__articleright'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widget__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle('HASHIR is back', 'Top News - 999 readers')}
        {newsArticle('Start Something', 'Top News - 999 readers')}
        {newsArticle('Corona is never existed', 'Top News - 999 readers')}
        {newsArticle('Take life as game', 'Top News - 999 readers')}
    </div>
  )
}

export default Widgets