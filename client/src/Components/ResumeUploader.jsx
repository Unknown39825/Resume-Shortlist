
import React, { useState, ChangeEvent } from 'react';
import { useRef } from 'react';

import { Form, Button, Table, Spinner } from 'react-bootstrap';
import ResultTable from './resultTable';
import SkillsRequired from './skillsRequired';
const ResumeUploader = () => {
    const [files, setFiles] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null)
    
    const [showResults, setShowResults] = useState(false);
    
    const [result, setResult] = useState([]);
    const [skills, setSkills] = useState([]);

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
            // alert("Please select the files");
            // show bootstrap alert

            return;
        }

        var data = new FormData();
        // file name 
        for (let i = 0; i < files.length; i++) {
            data.append('resume', files[i]);
        }

        data.append('query', jobDescription)
        console.log("hello");
        fetch('/uploader', {
            method: 'POST',
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                
                var results = data.results;
                // sort on the basis of the finalScore
                results.sort((a,b)=>{
                    return b.finalScore - a.finalScore
                })
                setSkills(data.querySkills);
                setResult(results);
                setShowResults(true);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false)
            }).finally(() => {
                setFiles(null);
                setJobDescription("");  
                setIsLoading(false);
                inputRef.current.value = null;
                
                // reset the file input
            });
    };

    const handleJobDescriptionChange = (e) => {
        setJobDescription(e.target.value);
    };

    const resetForm = ()=>{
        setFiles(null);
        setJobDescription("");
        setIsLoading(false);

        setShowResults(false);
    }
  
    return (

        <div >
            {/* basic resume uploader form */}

            <div className="container mt-3">
                <h1>Submit your resume & job Description</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="resumesUpload">
                        <Form.Label as='h3'>Upload The Resume</Form.Label>
                        {/* multiple file picker */}
                        <Form.Control type="file" ref={inputRef} onChange={handleFileChange} multiple />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="jobDescription">
                        <Form.Label as='h3'>Job Description</Form.Label>
                        <Form.Control as="textarea" rows={8} onChange={handleJobDescriptionChange} value={jobDescription} placeholder="Job Description" />
                    </Form.Group>
                    <Button onClick={handleUploadClick} variant="primary" type="submit">
                        Submit
                    </Button>

                    {
                        showResults && <Button variant='secondary' className='m-3' onClick={resetForm}>Reset</Button>
                    }

                </Form>
            </div>
            
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

           {
            isLoading && <>
                    
                    <div>
                        <Spinner animation='border' variant='seconary' className='mt-5' />
                    </div>
                
            </>
           }

        </div>
    );
}

export default ResumeUploader;
