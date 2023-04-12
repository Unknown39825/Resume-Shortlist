import React from 'react';
import { Badge, Button, Table } from 'react-bootstrap';

const ResultTable = (
    {
        result = [
            {
                "collegeScore": 9.00497512437811,
                "fileName": "chetan_11913047_1-pdf.txt",
                "finalScore": 78.54774417283518,
                "persentSkills": [
                    "Flutter",
                    "R",
                    "UI"
                ],
                "recomendedCourses": [],
                "recomendedSkills": [],
                "similarity": 0.11742895169815447,
                "skillScore": 100.0
            },
            {
                "collegeScore": 0,
                "fileName": "chetan_11913047_2-pdf.txt",
                "finalScore": 20.316911247392724,
                "persentSkills": [
                    "Flutter",
                    "R"
                ],
                "recomendedCourses": [
                    [
                        "Google UX Design Professional Certificate",
                        "https://www.coursera.org/professional-certificates/google-ux-design"
                    ],
                    [
                        "UI / UX Design Specialization",
                        "https://www.coursera.org/specializations/ui-ux-design"
                    ],
                    [
                        "The Complete App Design Course - UX, UI and Design Thinking",
                        "https://www.udemy.com/course/the-complete-app-design-course-ux-and-ui-design/"
                    ],
                    [
                        "UX & Web Design Master Course: Strategy, Design, Development",
                        "https://www.udemy.com/course/ux-web-design-master-course-strategy-design-development/"
                    ],
                    [
                        "The Complete App Design Course - UX, UI and Design Thinking",
                        "https://www.udemy.com/course/the-complete-app-design-course-ux-and-ui-design/"
                    ],
                    [
                        "DESIGN RULES: Principles + Practices for Great UI Design",
                        "https://www.udemy.com/course/design-rules/"
                    ],
                    [
                        "Become a UX Designer by Udacity",
                        "https://www.udacity.com/course/ux-designer-nanodegree--nd578"
                    ],
                    [
                        "Adobe XD Tutorial: User Experience Design Course [Free]",
                        "https://youtu.be/68w2VwalD5w"
                    ],
                    [
                        "Adobe XD for Beginners [Free]",
                        "https://youtu.be/WEljsc2jorI"
                    ],
                    [
                        "Adobe XD in Simple Way",
                        "https://learnux.io/course/adobe-xd"
                    ]
                ],
                "recomendedSkills": [
                    "UI"
                ],
                "similarity": 0.010563708246424117,
                "skillScore": 66.66666666666666
            },
            {
                "collegeScore": 9.00497512437811,
                "fileName": "chetan_11913047_bef_int-pdf.txt",
                "finalScore": 79.43518311845365,
                "persentSkills": [
                    "Flutter",
                    "R",
                    "UI"
                ],
                "recomendedCourses": [],
                "recomendedSkills": [],
                "similarity": 0.14701024988543696,
                "skillScore": 100.0
            },
            {
                "collegeScore": 0,
                "fileName": "chetan_11913047_comb-pdf.txt",
                "finalScore": 10.0,
                "persentSkills": [
                    "R"
                ],
                "recomendedCourses": [
                    [
                        "Android Development for Beginners [Free]",
                        "https://youtu.be/fis26HvvDII"
                    ],
                    [
                        "Android App Development Specialization",
                        "https://www.coursera.org/specializations/android-app-development"
                    ],
                    [
                        "Associate Android Developer Certification",
                        "https://grow.google/androiddev/#?modal_active=none"
                    ],
                    [
                        "Become an Android Kotlin Developer by Udacity",
                        "https://www.udacity.com/course/android-kotlin-developer-nanodegree--nd940"
                    ],
                    [
                        "Android Basics by Google",
                        "https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803"
                    ],
                    [
                        "The Complete Android Developer Course",
                        "https://www.udemy.com/course/complete-android-n-developer-course/"
                    ],
                    [
                        "Building an Android App with Architecture Components",
                        "https://www.linkedin.com/learning/building-an-android-app-with-architecture-components"
                    ],
                    [
                        "Android App Development Masterclass using Kotlin",
                        "https://www.udemy.com/course/android-oreo-kotlin-app-masterclass/"
                    ],
                    [
                        "Flutter & Dart - The Complete Flutter App Development Course",
                        "https://www.udemy.com/course/flutter-dart-the-complete-flutter-app-development-course/"
                    ],
                    [
                        "Flutter App Development Course [Free]",
                        "https://youtu.be/rZLR5olMR64"
                    ],
                    [
                        "Google UX Design Professional Certificate",
                        "https://www.coursera.org/professional-certificates/google-ux-design"
                    ],
                    [
                        "UI / UX Design Specialization",
                        "https://www.coursera.org/specializations/ui-ux-design"
                    ],
                    [
                        "The Complete App Design Course - UX, UI and Design Thinking",
                        "https://www.udemy.com/course/the-complete-app-design-course-ux-and-ui-design/"
                    ],
                    [
                        "UX & Web Design Master Course: Strategy, Design, Development",
                        "https://www.udemy.com/course/ux-web-design-master-course-strategy-design-development/"
                    ],
                    [
                        "The Complete App Design Course - UX, UI and Design Thinking",
                        "https://www.udemy.com/course/the-complete-app-design-course-ux-and-ui-design/"
                    ],
                    [
                        "DESIGN RULES: Principles + Practices for Great UI Design",
                        "https://www.udemy.com/course/design-rules/"
                    ],
                    [
                        "Become a UX Designer by Udacity",
                        "https://www.udacity.com/course/ux-designer-nanodegree--nd578"
                    ],
                    [
                        "Adobe XD Tutorial: User Experience Design Course [Free]",
                        "https://youtu.be/68w2VwalD5w"
                    ],
                    [
                        "Adobe XD for Beginners [Free]",
                        "https://youtu.be/WEljsc2jorI"
                    ],
                    [
                        "Adobe XD in Simple Way",
                        "https://learnux.io/course/adobe-xd"
                    ]
                ],
                "recomendedSkills": [
                    "Flutter",
                    "UI"
                ],
                "similarity": 0.0,
                "skillScore": 33.33333333333333
            },
            {
                "collegeScore": 9.00497512437811,
                "fileName": "chetan_11913047_latest-pdf.txt",
                "finalScore": 78.54774417283518,
                "persentSkills": [
                    "Flutter",
                    "R",
                    "UI"
                ],
                "recomendedCourses": [],
                "recomendedSkills": [],
                "similarity": 0.11742895169815447,
                "skillScore": 100.0
            },
            {
                "collegeScore": 0,
                "fileName": "chetan_11913047_photo-pdf.txt",
                "finalScore": 10.0,
                "persentSkills": [
                    "R"
                ],
                "recomendedCourses": [
                    [
                        "Android Development for Beginners [Free]",
                        "https://youtu.be/fis26HvvDII"
                    ],
                    [
                        "Android App Development Specialization",
                        "https://www.coursera.org/specializations/android-app-development"
                    ],
                    [
                        "Associate Android Developer Certification",
                        "https://grow.google/androiddev/#?modal_active=none"
                    ],
                    [
                        "Become an Android Kotlin Developer by Udacity",
                        "https://www.udacity.com/course/android-kotlin-developer-nanodegree--nd940"
                    ],
                    [
                        "Android Basics by Google",
                        "https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803"
                    ],
                    [
                        "The Complete Android Developer Course",
                        "https://www.udemy.com/course/complete-android-n-developer-course/"
                    ],
                    [
                        "Building an Android App with Architecture Components",
                        "https://www.linkedin.com/learning/building-an-android-app-with-architecture-components"
                    ],
                    [
                        "Android App Development Masterclass using Kotlin",
                        "https://www.udemy.com/course/android-oreo-kotlin-app-masterclass/"
                    ],
                    [
                        "Flutter & Dart - The Complete Flutter App Development Course",
                        "https://www.udemy.com/course/flutter-dart-the-complete-flutter-app-development-course/"
                    ],
                    [
                        "Flutter App Development Course [Free]",
                        "https://youtu.be/rZLR5olMR64"
                    ],
                    [
                        "Google UX Design Professional Certificate",
                        "https://www.coursera.org/professional-certificates/google-ux-design"
                    ],
                    [
                        "UI / UX Design Specialization",
                        "https://www.coursera.org/specializations/ui-ux-design"
                    ],
                    [
                        "The Complete App Design Course - UX, UI and Design Thinking",
                        "https://www.udemy.com/course/the-complete-app-design-course-ux-and-ui-design/"
                    ],
                    [
                        "UX & Web Design Master Course: Strategy, Design, Development",
                        "https://www.udemy.com/course/ux-web-design-master-course-strategy-design-development/"
                    ],
                    [
                        "The Complete App Design Course - UX, UI and Design Thinking",
                        "https://www.udemy.com/course/the-complete-app-design-course-ux-and-ui-design/"
                    ],
                    [
                        "DESIGN RULES: Principles + Practices for Great UI Design",
                        "https://www.udemy.com/course/design-rules/"
                    ],
                    [
                        "Become a UX Designer by Udacity",
                        "https://www.udacity.com/course/ux-designer-nanodegree--nd578"
                    ],
                    [
                        "Adobe XD Tutorial: User Experience Design Course [Free]",
                        "https://youtu.be/68w2VwalD5w"
                    ],
                    [
                        "Adobe XD for Beginners [Free]",
                        "https://youtu.be/WEljsc2jorI"
                    ],
                    [
                        "Adobe XD in Simple Way",
                        "https://learnux.io/course/adobe-xd"
                    ]
                ],
                "recomendedSkills": [
                    "Flutter",
                    "UI"
                ],
                "similarity": 0.0,
                "skillScore": 33.33333333333333
            },
            {
                "collegeScore": 9.00497512437811,
                "fileName": "resume_latest-pdf.txt",
                "finalScore": 75.58758617724095,
                "persentSkills": [
                    "Flutter",
                    "R",
                    "UI"
                ],
                "recomendedCourses": [],
                "recomendedSkills": [],
                "similarity": 0.018757018511680275,
                "skillScore": 100.0
            },
            {
                "collegeScore": 9.00497512437811,
                "fileName": "resume_updated-pdf.txt",
                "finalScore": 75.58758617724095,
                "persentSkills": [
                    "Flutter",
                    "R",
                    "UI"
                ],
                "recomendedCourses": [],
                "recomendedSkills": [],
                "similarity": 0.018757018511680275,
                "skillScore": 100.0
            }
        ]
    }
) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>File Name</th>
                    <th>College Score</th>
                    <th>Present Skills</th>
                    <th>Recommended Skills</th>
                    <th>Recommended Courses</th>
                    <th>Similarity</th>
                    <th>Skill Score</th>
                    <th>Final Score</th>
                </tr>
            </thead>
            <tbody>
                {result.map((item, index) => {
                    return (
                        <tr>
                            <td>{index +1}</td>
                            <td>{item.fileName}</td>
                            <td>{item.collegeScore}</td>
                            {/* show in the form of markdown */}
                            <td>{
                                item.persentSkills.map((skill) => {
                                    return (
                                        <Badge className='m-1 p-2' variant="primary">
                                            {skill}
                                        </Badge>
                                    );
                                })}</td>

                            <td>{
                                item.recomendedSkills.map((skill) => {
                                    return (
                                        <Badge className='m-1 p-2' bg="success">
                                            {skill}
                                        </Badge>
                                    );
                                })}</td>
                            <td>
                                <Table>
                                    {
                                        item.recomendedCourses.map((course) => {
                                            return (
                                                <tr  bg="success">
                                                    {/* link */}
                                                    <Button className='m-1 p-2' href={course[1]}>
                                                        {course[0]}
                                                    </Button>
                                                </tr>
                                            );
                                        })}
                                </Table>
                            </td>
                            <td>{item.similarity}</td>
                            
                            <td>{item.skillScore}%</td>
                            <td>{item.finalScore}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default ResultTable;
