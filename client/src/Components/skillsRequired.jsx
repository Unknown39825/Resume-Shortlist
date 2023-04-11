import React from 'react';
import { Badge } from 'react-bootstrap';

const SkillsRequired = (
    {
        skills =[
        ]
    }
) => {
    return (
        <div className='m-5'>
            <h1>Skills Required for the Resume</h1>
            {
                skills.map(skill=>{
                    return (
                        <Badge className='m-1 p-3' bg="success">
                            {skill}
                        </Badge>
                    );
                })
            }
        </div>
    );
}

export default SkillsRequired;
