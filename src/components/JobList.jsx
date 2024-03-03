import React, { useEffect, useState } from 'react';
import JobTile from '../containers/JobTile';
import './JobList.css';
import jobOffers from '../../data.json';

function JobList () {
    const [filters, setFilters] = useState([]);
    const [filteredJobOffers, setFilteredJobOffers] = useState([]);

    useEffect(() => {
        setFilteredJobOffers((prev) => (jobOffers.filter((jobOffer) => {
            const tags = [...jobOffer.languages, ...jobOffer.tools, jobOffer.level, jobOffer.role];
            return (filters.every(item => tags.includes(item)))
        })))
    }, [filters])

    const handleAddingFilter = (newFilter) => {
        setFilters((prev) => {
            if (!filters.includes(newFilter)) {
                return [newFilter, ...prev];
            } else {
                return filters;
            }
        })
    }

    const removeFilter = (filterToRemove) => {
        setFilters((prev) => {
            return prev.filter((item) => item !== filterToRemove);
        })
    }

    const removeAllFilters = () => {
        setFilters([]);
    }
    
    return (
        <>
            <section className="job-list__header">
                
            </section>
            {filters.length > 0 ? (<section className='filters'>
                <ul className='filters__list'>
                    {filters.map((filter, i) => {
                        return (
                            <li key={i} className='filters__filter'>
                                <button 
                                    className='filters__filter-name' 
                                    key={`${filter}-${i}`}>
                                        {filter}
                                </button>
                                <button 
                                    className='filters__filter-remove' 
                                    key={`remove-${i}`} 
                                    value={filter} 
                                    onClick={({ target }) => {removeFilter(target.value)}}>
                                    X
                                </button>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={removeAllFilters} className='filters__clear'>Clear</button>
            </section>) : ""}
            
            <section className='job-list'>
                {
                    (filters ? filteredJobOffers : jobOffers).map((jobOffer) => {
                        return (<JobTile 
                            company={jobOffer.company} 
                            contract={jobOffer.contract} 
                            featured={jobOffer.featured}
                            key={jobOffer.id}
                            languages={jobOffer.languages}
                            level={jobOffer.level}
                            location={jobOffer.location}
                            logo={jobOffer.logo}
                            isNew={jobOffer.new}
                            position={jobOffer.position}
                            postedAt={jobOffer.postedAt}
                            role={jobOffer.role}
                            tools={jobOffer.tools}
                            addFilter={handleAddingFilter}
                        />)
                    })
                }
                
            </section>
        </>
    )
}

export default JobList;