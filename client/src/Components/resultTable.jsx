import React, { useState } from 'react';
import { Accordion, Badge, Button, Modal, Table } from 'react-bootstrap';
import LandingModal from './LandingModal';

const ResultTable = (
    {
        result = []
    },
) => {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});
    
    const showModal = (index) => {
        console.log(index);
        setModalData(result[index]);
        setShow(true);
    }

    return (
        <Table striped bordered hover className='text-center' responsive>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>File Name</th>
                    {/* <th>College Score</th> */}
                    {/* <th>Present Skills</th> */}
                    {/* <th>Recommended Skills</th> */}
                    {/* <th>Recommended Courses</th> */}
                    <th>Similarity</th>
                    {/* <th>Skill Score</th> */}
                    <th>Final Score</th>
                    <th> Detailed Result</th>
                </tr>
            </thead>
            <tbody>
                {result.map((item, index) => {
                    return (
                        <tr>
                            <td>{index +1}</td>
                            <td>{item.fileName}</td>
                            {/* <td>{item.collegeScore}</td> */}
                            {/* show in the form of markdown */}
                            {/* <td>{
                                item.persentSkills.map((skill) => {
                                    return (
                                        <Badge className='m-1 p-2' variant="primary">
                                            {skill}
                                        </Badge>
                                    );
                                })}</td> */}
{/* 
                            <td>{
                                item.recomendedSkills.map((skill) => {
                                    return (
                                        <Badge className='m-1 p-2' bg="success">
                                            {skill}
                                        </Badge>
                                    );
                                })}</td> */}

                            {/* <td>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                    <Accordion.Header>Course Recommendations </Accordion.Header>
                                    <Accordion.Body>
                                            {
                                                item.recomendedCourses.map((course) => {
                                                    return (
                                                        <ul bg="success">
                                                            
                                                            <a className='' href={course[1]}>
                                                                {course[0]}
                                                            </a>
                                                        </ul>
                                                    );
                                                })}
                                    </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </td> */}
                            <td>{item.similarity}</td>
                            
                            <td>{item.finalScore}</td>
                            <td><Button onClick={() => showModal(index)} variant="primary">Show</Button></td>
                        </tr>
                    );
                })}
            </tbody>
            <LandingModal setShow={setShow} show={show} data={modalData}/>
        </Table>
    );
}

export default ResultTable;
