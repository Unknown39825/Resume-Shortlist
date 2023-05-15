import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import ResumeUploader from './ResumeUploader';

const LandingPage = () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">Resume ShortListing Using KNN & Cosine Similarity</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Project Group: IT07
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ResumeUploader/>
        </div>
    );
}

export default LandingPage;
