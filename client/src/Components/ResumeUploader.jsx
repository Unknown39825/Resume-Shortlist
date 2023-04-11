
import React, { useState, ChangeEvent } from 'react';

import { Form, Button, Table } from 'react-bootstrap';
import ResultTable from './resultTable';
import SkillsRequired from './skillsRequired';
const ResumeUploader = () => {
    const [files, setFiles] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [showResults, setShowResults] = useState(false);
    
    const [result, setResult] = useState([
        ]);
    const [skills, setSkills] = useState([
    ]);

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFiles(e.target.files);
        }
    };
    const [jobDescription, setJobDescription] = useState("");

    const handleUploadClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("hello");
        console.log(files);
        if (!files || !files.length) {
            alert("Please select the files");
            return;
        }

        var data = new FormData();
        // file name 
        for (let i = 0; i < files.length; i++) {
            data.append('resume', files[i]);
        }

        data.append('query', jobDescription)
        console.log("hello");
        fetch('http://localhost:5000/uploader', {
            method: 'POST',
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setResult(data.results);
                var skills = data.skills;
                // sort on the basis of the finalScore
                skills.sort((a,b)=>{
                    return a.finalScore - b.finalScore
                })
                setSkills(data.skills.sort());
                setShowResults(true);
            })
            .catch((err) => console.error(err)).finally(() => {
                setFiles(null);
                setJobDescription("");  
                setIsLoading(false);
                // reset the file input
            });
    };

    const handleJobDescriptionChange = (e) => {
        setJobDescription(e.target.value);
    };
    return (
        <div>
            {/* basic resume uploader form */}
            <Form>
                <Form.Group className="mb-3" controlId="resumesUpload">
                    <Form.Label>Upload The Resume</Form.Label>
                    {/* multiple file picker */}
                    <Form.Control type="file" onChange={handleFileChange} multiple />

                </Form.Group>

                <Form.Group className="mb-3" controlId="jobDescription">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control type="text" onChange={handleJobDescriptionChange} value={jobDescription} placeholder="Job Description" />
                </Form.Group>
                <Button onClick={handleUploadClick} variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
            
           {
            showResults &&  <>

                        {
                            <SkillsRequired skills={skills} />
                        }

                        {
                            <ResultTable result={result} />
                        }
                    </>
           }

        </div>
    );
}

export default ResumeUploader;
