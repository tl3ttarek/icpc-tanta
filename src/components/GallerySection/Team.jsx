import React from 'react'

import { team } from './data'

function Team() {
    return (
    <div className="coaches">

        <p className="heading-sub">
            Mentors and Coaches
        </p>

        <h2 className='heading-secondary' >
            Meet our team
        </h2>

        <div className="coaches-grid grid grid--3-col">
        {
            team.map((coach)=>{
                return(
                    <div className="coach">
                        <img src={coach.img} alt="coach" className="coach-img" />
                        <p className="coach-name">{coach.name}</p>
                        <p className="coach-title">{coach.title}</p>
                    </div>
                    )
                    })
        }
        </div>

    </div>
    )
}

export default Team
