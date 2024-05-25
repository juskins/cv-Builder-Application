import React, { useState } from "react";
import './cv.css'

export default function CvApp(){
    const [formDetails, setformDetails] = useState({name:'',email:'',phone:'',address:''});
    const [eduDetails, setEduDetails] = useState({schoolName:'',studyTitle:'',studyLocation:'',startDate:'',endDate:''});
    const [profDetails, setProfDetails] = useState({companyName:'',posTitle:'',companyLocation:'',startDate:'',endDate:'', description:''});
    const [iseditingOpened, setIsEditingOpened] = useState({personalInfoEdit:false,eduEdit:false,profEdit:false})

    return(
        <div className="cvContainer">
            <div className="flexContainer">
                <Main formDetails={formDetails} setformDetails={setformDetails} iseditingOpened={iseditingOpened} setIsEditingOpened={setIsEditingOpened} eduDetails={eduDetails} setEduDetails={setEduDetails} profDetails={profDetails} setProfDetails={setProfDetails}/>
                <SideBar formDetails={formDetails} setformDetails={setformDetails} eduDetails={eduDetails} setEduDetails={setEduDetails} profDetails={profDetails} setProfDetails={setProfDetails}/>
            </div>
            <Footer/>

        </div>
    )
}

function Main({formDetails,setformDetails,iseditingOpened,setIsEditingOpened,eduDetails,setEduDetails,profDetails,setProfDetails}){
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleSectionClick = (id)=>{
        if(openAccordion !== id){
            setOpenAccordion(id)
        }
        else setOpenAccordion(null)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setformDetails({...formDetails})
        setIsEditingOpened({...iseditingOpened,personalInfoEdit:true})
    } 
    const handleEduSubmit = (e)=>{
        e.preventDefault();
        setEduDetails({...eduDetails})
        setIsEditingOpened({...iseditingOpened,eduEdit:true})
    }
    const handleProfSubmit = (e)=>{
        e.preventDefault();
        setProfDetails({...profDetails})
        setIsEditingOpened({...iseditingOpened,profEdit:true})
    }
    const clearResume = ()=>{
        setformDetails({...formDetails,name:'',email:'',phone:'',address:''});
        setEduDetails({...eduDetails,schoolName:'',studyTitle:'',studyLocation:'',startDate:'',endDate:''});
        setProfDetails({...profDetails,companyName:'',posTitle:'',companyLocation:'',startDate:'',endDate:'',description:''});
        setIsEditingOpened({...iseditingOpened,personalInfoEdit:false,eduEdit:false,profEdit:false});
        setOpenAccordion(null)
    } 
    const loadExample = ()=>{
        setformDetails({...formDetails,name:'Omojuwa Babatunde Kolawole',email:'omojuwababatunde1@gmail.com',phone:'+234 70810510',address:'Lagos,Nigeria'});
        setEduDetails({...eduDetails,schoolName:'Federal University of Technology Akure',studyTitle:'Computer Engineering',studyLocation:'Akure',startDate:'2018-01',endDate:'2023-12'});
        setProfDetails({...profDetails,companyName:'Google Inc',posTitle:'Web Developer',companyLocation:'Silicon Valley, USA',startDate:'2025-01',endDate:'2024-01',description:'I love programming'});
        setIsEditingOpened({...iseditingOpened,personalInfoEdit:false,eduEdit:false,profEdit:false});
        setOpenAccordion(null)
    }  
    
    return(
        <main>
            <div className="downloadResume">
                <button onClick={clearResume}>Clear Resume</button>
                <button onClick={loadExample} className="loadExample">Load Example</button>
                <button className="resumedownloadBtn">Download</button>
            </div>

            <div className={`generalInfoSection ${openAccordion === 0 ? 'open' : ''}`}>
                <div className="generalInfoHeader" onClick={()=>handleSectionClick(0)}>
                    <div className="header-details">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z" /></svg>
                        <div className="infoHeader">General Information</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </div>

                {iseditingOpened.personalInfoEdit ? 
                <div className="updatedInfo">
                    <div className="my-details">
                        <h3>{formDetails.name}</h3>
                        <p>{formDetails.email}</p>
                        <p>{formDetails.phone}</p>
                        <p>{formDetails.address}</p>
                    </div>
                    <div className="editBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                        <p onClick={()=>setIsEditingOpened({...iseditingOpened,personalInfoEdit:false})}>Edit</p>
                    </div>
                 </div>
                : 
                <form onSubmit={handleSubmit}>
                    <h3>Personal Details</h3>
                    <div className="formField">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="" id="fullName" value={formDetails.name} onChange={(e)=>setformDetails({...formDetails,name:e.target.value})} required/>
                    </div>
                    <div className="formField">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" value={formDetails.email} onChange={(e)=>setformDetails({...formDetails,email:e.target.value})} required/>
                    </div>
                    <div className="formField">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" name="" id="phone" value={formDetails.phone} onChange={(e)=>setformDetails({...formDetails,phone:e.target.value})} required/>
                    </div>
                    <div className="formField">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="" id="address" maxLength={15} value={formDetails.address} placeholder="London, Uk" onChange={(e)=>setformDetails({...formDetails,address:e.target.value})} required/>
                    </div>
                    <button type="submit">Submit</button>
                </form>}  
            </div>




            {/* Education Section */}
            <div className={`generalInfoSection ${openAccordion === 1 ? 'open' : ''}`}>
                <div className="generalInfoHeader" onClick={()=>handleSectionClick(1)}>
                    <div className="header-details">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg>
                        <div className="infoHeader">Education Experience</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </div>

                {iseditingOpened.eduEdit ? 
                <div className="updatedInfo">
                    <div className="my-details">
                        <h3>{eduDetails.schoolName}</h3>
                        <p>{eduDetails.studyTitle}</p>
                        <p>{eduDetails.studyLocation}</p>
                        <p>{eduDetails.startDate}</p>
                        <p>{eduDetails.endDate}</p>
                    </div>
                    <div className="editBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                        <p onClick={()=>setIsEditingOpened({...iseditingOpened,eduEdit:false})}>Edit</p>
                    </div>
                </div>
            : 
                <form onSubmit={handleEduSubmit}>
                    <h3>Academic Experience</h3>
                    <div className="formField">
                        <label htmlFor="name">Name of Institution of Study</label>
                        <input type="text" name="" id="name" placeholder={'Enter school Name'} value={eduDetails.schoolName} onChange={(e)=>setEduDetails({...eduDetails,schoolName:e.target.value})} required/>
                    </div>
                    <div className="formField">
                        <label htmlFor="studTitle">Title of Study</label>
                        <input type="text" name="" id="studTitle" placeholder={'Enter name of Degree'} value={eduDetails.studyTitle} onChange={(e)=>setEduDetails({...eduDetails,studyTitle:e.target.value})} required/>
                    </div>
                    <div className="formField">
                        <label htmlFor="schoolLoc">School's Location</label>
                        <input type="text" name="" id="schoolLoc" placeholder={'Enter School Location'} value={eduDetails.studyLocation} onChange={(e)=>setEduDetails({...eduDetails,studyLocation:e.target.value})} required/>
                    </div>
                    <div className="formField">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="month" name="" id="startDate" value={eduDetails.startDate} onChange={(e)=>setEduDetails({...eduDetails,startDate:e.target.value})} required/>
                    </div>
                    <div className="formField">
                        <label htmlFor="endDate">End Date</label>
                        <input type="month" name="" id="endDate" value={eduDetails.endDate} placeholder="London, Uk" onChange={(e)=>setEduDetails({...eduDetails,endDate:e.target.value})} required/>
                    </div>
                    <button type="submit">Submit</button>
                </form>}  
            </div>
            



            {/* Professional Experience */}
            <div className={`generalInfoSection ${openAccordion === 2 ? 'open' : ''}`}>
                <div className="generalInfoHeader" onClick={()=>handleSectionClick(2)}>
                    <div className="header-details">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z" /></svg>
                        <div className="infoHeader">Professional Experience</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </div>

                {iseditingOpened.profEdit ? 
                <div className="updatedInfo">
                    <div className="my-details">
                        <h3>{profDetails.companyName}</h3>
                        <p>{profDetails.posTitle}</p>
                        <p>{profDetails.companyLocation}</p>
                        <p>{profDetails.startDate}</p>
                        <p>{profDetails.endDate}</p>
                    </div>
                    <div className="editBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                        <p onClick={()=>setIsEditingOpened({...iseditingOpened,eduEdit:false})}>Edit</p>
                    </div>
                </div>
            : 
                <form onSubmit={handleProfSubmit}>
                    <h3>Academic Experience</h3>
                    <div className="formField">
                        <label htmlFor="name">Company's Name</label>
                        <input type="text" name="" id="name" placeholder={'Enter name of the company'} value={profDetails.companyName} onChange={(e)=>setProfDetails({...profDetails,companyName:e.target.value})} required/>
                    </div>
                    <div className="formField">
                        <label htmlFor="posTitle">Title of Postion</label>
                        <input type="text" name="" id="posTitle" placeholder={'Enter position title'} value={profDetails.posTitle} onChange={(e)=>setProfDetails({...profDetails,posTitle:e.target.value})} required/>
                    </div>
                    <div className="formField">
                        <label htmlFor="companyLoc">Company's Location</label>
                        <input type="text" name="" id="companyLoc" placeholder={'Enter company\'s Location'} value={profDetails.companyLocation} onChange={(e)=>setProfDetails({...profDetails,companyLocation:e.target.value})}/>
                    </div>
                    <div className="formField">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="month" name="" id="startDate" value={profDetails.startDate} onChange={(e)=>setProfDetails({...profDetails,startDate:e.target.value})} required/>
                    </div>
                    <div className="formField">
                        <label htmlFor="endDate">End Date</label>
                        <input type="month" name="" id="endDate" value={profDetails.endDate} onChange={(e)=>setProfDetails({...profDetails,endDate:e.target.value})} required/>
                    </div>
                    <div className="formField">
                        <label htmlFor="description">Description</label>
                        <textarea value={profDetails.description} onChange={(e)=>setProfDetails({...profDetails,description:e.target.value})}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>}  
            </div>

            
        </main>
    )
}


function SideBar({formDetails,eduDetails,profDetails,setProfDetails}){
    return(
        <div className="side-bar">
            <div className="sidebar-header">
                <h2>{formDetails.name}</h2>
                <div className="contacts">
                    <div>
                        {formDetails.email !== '' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 6V20H20V22H2C.895 22 0 21.11 0 20V6H2M24 4C24 2.9 23.1 2 22 2H6C4.9 2 4 2.9 4 4V16C4 17.1 4.9 18 6 18H22C23.1 18 24 17.1 24 16V4M22 4L14 9L6 4H22M22 16H6V6L14 11L22 6V16Z" /></svg>}
                        <p>{formDetails.email}</p>
                    </div>
                    <div>
                        {formDetails.phone !== '' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" /></svg>}
                        <p>{formDetails.phone}</p>
                    </div>
                    <div>
                        {formDetails.address !== '' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" /></svg>}
                        <p>{formDetails.address}</p>
                    </div>
                </div>
            </div>

            <section className="sidebar-details">
                <div className="education-details">
                    <h3>Education</h3>
                    <div className="education-item">
                        <div className="details">
                            <div>{eduDetails.startDate} {eduDetails.startDate !== '' && eduDetails.endDate !== '' && <span>-</span>} {eduDetails.endDate}</div>                          
                            <h4>{eduDetails.schoolName}</h4>
                        </div>
                        <div className="details">
                            <div>{eduDetails.studyLocation}</div>
                            <p>{eduDetails.studyTitle}</p>
                        </div> 
                    </div> 
                </div>

                <div className="education-details">
                    <h3>Professional Experience</h3>
                    <div className="education-item">
                        <div className="details">
                            <div>{profDetails.startDate} {profDetails.startDate !== '' && profDetails.endDate !== '' && <span>-</span>} {profDetails.endDate}</div>
                            <h4>{profDetails.companyName}</h4>
                            <h4>{profDetails.posTitle}</h4>
                        </div>
                        <div className="details">
                            <div>{profDetails.companyLocation}</div>
                            <p>{profDetails.description}</p>
                        </div> 
                    </div> 
                </div>
            </section>
        </div>
    )
}


function Footer(){
    return(
        <div className="footer">
            <small>@copyrights Designed by Juskins</small>
        </div>
    )
}