import React from 'react';
import { ReactSVG } from 'react-svg';
import './JobDescription.css'

const JobDescription = ({ company, contract, featured, location, logo, isNew, position, postedAt }) => {
    return (
        <div className='job-description'>
            <ReactSVG src={logo} className='logo'/>
            <div className='job-description-without-logo'>
                <div>
                    <span className='company'>{company}</span>
                    {isNew && <span className='new'>New!</span>}
                    {featured && <span className='featured'>Featured</span>}
                </div>
                <h3 className='position'>{position}</h3>
                <div className='job-info'>
                    <span className='posted-at'>{postedAt}</span>
                    <span className='contract'>{contract}</span>
                    <span className='location'>{location}</span>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default JobDescription;
