import React, {useState} from 'react'
import '../Dashboard/Dashboard.css'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "../../components/AnimatedProgressBar/AnimatedProgressProvider";

function MoreInfo() {
    const [semState,setSemState] = useState("2020ODDSEM");                          // State semesters
    const [semState2,setSemState2] = useState("2020ODDSEM");
    const user = JSON.parse(localStorage.getItem('user-info'));                     // user-credentials
    const cgpa = JSON.parse(localStorage.getItem('cgpa'));                          // CGPA
    const semester = JSON.parse(localStorage.getItem('semesters'));                 // Semesters
    const subjects = JSON.parse(localStorage.getItem(`subjects-${semState}`));      // Subjects
    const faculty = JSON.parse(localStorage.getItem(`faculty-${semState2}`));        // Faculty
    const sem = cgpa.length                                                         //current semester / total semesters

    //Function to convert to lower case exect the first letter
    function upperCaseFirstLetter(string) {
        if(string !== null )
        {return string.charAt(0).toUpperCase() + string.slice(1);}
        return string
    }
    
    function lowerCaseAllWordsExceptFirstLetters(string) {
        if(string !== null )
        {return string.replace(/\S*/g, function (word) {
            return word.charAt(0) + word.slice(1).toLowerCase();
        });
        }
        return string
    }



    return (
        <div>
            <div className='dashboard-container'>
                <div className='d-container-1'>
                    <div className="d-container-1-1">
                        <div className='d-1-1-text'>
                            <p><span className='d-student' >Student</span><br/><span className='d-enroll' >{user.enrollmentNumber}</span><br/><span className="d-student">{sem}nd semester</span></p>
                            <p><span  className='d-cgpa'>{cgpa[sem-1].cgpa}</span>  <span  className='d-cgpa-text'>cgpa</span></p>
                        </div>
                    </div>
                    <div className="d-container-1-2">
                        <div className='d-1-2-text'>
                            <p><span className='d-attendance' >Subjects</span></p>
                            <div>
                            <br/>    
                            {/**<label for="d-1-2-semester">Semester:</label>*/}
                            <select name="d-1-2semester" className='d-1-2-semester' id="d-1-2-semester" onChange={(e)=>{
                                 const selectedSemester = e.target.value;
                                 setSemState(selectedSemester);
                            }}> 
                            {semester.map(post=>{
                                return(
                                    <>
                                        <option value={post.semesterCode} className='d-options'>{post.semesterCode}</option>
                                    </>
                                )
                            })}
                            </select>                          
                            </div>
                        </div>
                        <div className='d-1-2-grades'>
                            {subjects.map(marks=>{
                                return(
                                    <>
                                    <div className='d-grades-list' key={marks.serialNumber}>
                                        <p><span className='d-subjectname'>{upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(marks.subjectName))}</span><br/>
                                        <span className='d-grey'>Subcode:</span> <span className='d-examcode'>{marks.subjectCode}</span><br/>
                                        <span className='d-grey'>Type:</span> <span className='d-subjectcode'>{marks.subjectType}</span><br/>
                                        <span className='d-grey'>Credits:</span> <span className='d-grades'>{marks.subjectCredits}</span></p>
                                    </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>    
                    
                    
                </div>
                <div className='d-container-2'>
                   
                    <div className='d-container-2-2'>
                        {cgpa.map((cgpa)=>
                            <AnimatedProgressProvider valueStart={0} valueEnd={cgpa.cgpa*10} >
                            {value => (
                            <CircularProgressbar value={value} text={cgpa.cgpa} className="progress-bar"  strokeWidth={13} styles={buildStyles({pathColor:`#C715DE`,trailColor:'#1B1B1B',textColor:'#ffff'})}/>
                            )}
                            </AnimatedProgressProvider>
                            )}
                    </div>
                    <div className='d-container-2-1'>
                        <div className='d-1-2-text'>
                            <p><span className='d-attendance' >Faculty</span></p>
                            <div>
                            <br/>    
                            {/**<label for="d-1-2-semester">Semester:</label>*/}
                            <select name="d-1-2semester" className='d-1-2-semester' id="d-1-2-semester" onChange={(e)=>{
                                 const selectedSemester = e.target.value;
                                 setSemState2(selectedSemester);
                            }}> 
                            {semester.map(post=>{
                                return(
                                    <>
                                        <option value={post.semesterCode} className='d-options'>{post.semesterCode}</option>
                                    </>
                                )
                            })}
                            </select>                          
                            </div>
                        </div>
                        <div className='d-1-2-grades'>
                            {faculty.map(marks=>{
                                return(
                                    <>
                                    <div className='d-grades-list' key={marks.serialNumber}>
                                        <p><span className='d-subjectname'>{upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(marks.subjectName))}</span><br/>
                                        <span className='d-grey'>Practical:</span> <span className='d-examcode'>{upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(marks.practicalFaculty))}</span><br/>
                                        <span className='d-grey'>Lecture:</span> <span className='d-subjectcode'>{upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(marks.lectureFaculty))}</span><br/>
                                        <span className='d-grey'>Tutorial:</span> <span className='d-subjectcode'>{upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(marks.tutorialFaculty))}</span></p>
                                    </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>                
        </div>
    )
}

export default MoreInfo
