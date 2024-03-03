import React from 'react';
import './JobTags.css'

const JobTags = ({ languages, level, role, tools, addFilter }) => {
    return (
        <div className='jobTags'>
            <button className="tag" value={role} onClick={({ target }) => {addFilter(target.value)}}>{role}</button>
            <button className="tag" value={level} onClick={({ target }) => {addFilter(target.value)}}>{level}</button>
            {languages.map((language, i) => {
                return <button className="tag" key={i} value={language} onClick={({ target }) => {addFilter(target.value)}}>{language}</button>
            })}
            {tools.map((tool, i) => {
                return <button className="tag" key={i} value={tool} onClick={({ target }) => {addFilter(target.value)}}>{tool}</button>
            })}
        </div>
    );
}

export default JobTags;
