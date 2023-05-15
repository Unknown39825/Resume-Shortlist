import React from 'react';
import { Badge, Button, Modal, Table } from 'react-bootstrap';

const LandingModal = (
    {
        show = false,
        setShow = () => { },
        data = {}
    }
) => {
    return (
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{data.fileName?.slice(0,-4)}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {/* college score */}

               <div className="container">
                    <h2 className="pt-2">College Score: {data.collegeScore}</h2>
                    <h2 className="pt-2">Skill Score: {data.skillScore?.toFixed(2)}%</h2>

                    <h2 className='mt-3'> Skills present are:</h2>
                    {
                        data.resumeSkills?.map((skill) => {
                            return (
                                <Badge className='m-1 p-2' bg="primary">
                                    {skill}
                                </Badge>
                            );
                        })
                    }

                    <h2 className='mt-3'> Skills required are:</h2>
                    {
                        data.recomendedSkills?.map((skill) => {
                            return (
                                <Badge className='m-1 p-2' bg="secondary" >
                                    {skill}
                                </Badge>
                            )
                        })}
                    <h2 className='mt-3'> Recommended courses:</h2>
                    {
                        data.recomendedCourses?.map((course) => {
                            return (
                                <Button className='m-1 p-2' variant="success" href={course[1]} >
                                    {course[0]}
                                </Button>
                            )
                        })}

                    <h2 className='mt-3'>Similarity with the Job Description : {(data.similarity * 100)?.toFixed(2)}%</h2>
                    <h2 className='mt-3'>KNN Predicted Class: </h2>
                    <Table striped bordered hover >
                        <tr>
                            <th>Job Category</th>
                            <th> Percentage match</th>

                        </tr>
                        {
                            data.knnResult?.map((result)=>{
                                return(
                                    <tr>
                                        <td>{result[0]}</td>
                                        <td>{result[1]}</td>
                                    </tr>
                                )
                            })
                        }
                    </Table>
               </div>

            </Modal.Body>
        </Modal>
    );
}

export default LandingModal;
