import React from 'react';
import JobTags from './JobTags';
import JobDescription from './JobDescription';
import './JobTile.css'

const JobTile = ({ company, contract, featured, languages, level, location, logo, isNew, position, postedAt, role, tools, addFilter }) => {
    return (
        <div className={featured ? "job-tile featured-one" : "job-tile"}>
            <JobDescription 
                company={company}
                contract={contract}
                featured={featured}
                location={location}
                logo={logo}
                isNew={isNew}
                position={position}
                postedAt={postedAt}
            />
            <JobTags 
                languages={languages}
                level={level}
                role={role}
                tools={tools}
                addFilter={addFilter}
            />
        </div>
    );
}

export default JobTile;
