import React, { Component } from 'react'
import "./ResumeStyle.css"

import Decor from "./Decor.js"
import Head from "./ResumeHead.js"
import Work from "./ResumeWork.js"

export default class Resume extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <section className='section-resume'>
                <div className='title-section resume-title'>
                    <h1>Resume</h1>
                </div>
            <Decor/>
            <div  className='container'>
            <Head/>
            <div className='spacer'></div>
            <h3>WORK EXPERIENCE</h3>
            <Work
            WorkDate="11/01/2021 – CURRENT – Marsa, Malta" 
            WorkTitle="Apco Pay" WorkPos="Software Developer" 
            WorkDesc="Apcopay is a fully integrated payments solution. An all-in-one platform that provides clients with all they need to cater for multi-channel and multi-currency payment options through a single interface."                    
            Skills = 
            { 
                [{Key: 1, Title:"Asp.Net", List:["Integrating third-party Payment options. Updating current integrated payment options.", 
                "Refactoring of code and fixing any issues in the code.",
                "Developing REST API services for internal use with connection to the database.",
                "Consuming third-party APIs and integrating them to the current system.",
                "Testing and developing Test cases for each project."
                ]},
                {Key: 2,Title:"React", List:["Upgrading the front end of project that use older front end technologies to a newer and up to date technology such as react and angular.", 
                "Using APIs to fetch data from our own API services."]},
                {Title:"JavaScript", List:["Updating and creating new JavaScript features for web projects.", 
                "Debugging and testing current JavaScript implementations.", 
                "Refactoring of current JavaScript code."]},
                {Key: 3,Title:"CSS", List:["Implementing new design for web page using Bootstrap and custom CSS code.", 
                "Using SCSS for variable implementation code, such as Dark and Light mode."
                ]},
                {Key: 4,Title:"SQL", List:["Creating new Tables for the database.", 
                "CRUD implementation on current implemented tables."
                ]}]
            }                    
            />
            <Work
            WorkDate="01/09/2020 – 08/01/2021 – Qormi" 
            WorkTitle="PwC" WorkPos="Software Developer" 
            WorkDesc="PricewaterhouseCoopers is an international professional services brand of firms, operating as partnerships under the PwC brand. It is the second-largest professional services network in the world and is considered one of the Big Four accounting firms, along with Deloitte, EY and KPMG."                    
            Skills = 
            { 
                [{Key:5, Title:"Asp.Net", List:["Using .NET framework to develop Web applications. This varies to Webservices using REST to MVC applications.", 
                "Using .NET framework for any client/internal related tasks to develop new functionalities or fix any issues.",
                "Testing .NET framework applications with the use of test cases."
            ]},
            {Key: 6, Title:"C#", List:["Using C# to develop console application with a daily timer that performs a task daily. Such as archiving, cleaning and creating items within a site..", 
            "Using C# to develop SharePoint related projects which kick starts workflows from a Console/Desktop application."]},

            {Key:7, Title:"Python", List:["Developing scraping tools that is used to read contents of a web page and stores the data in excel.", 
            "Using Flask to develop various functionalities while having a UI for the front user."]},

            {Key: 8, Title:"SQL", List:["SQL database handling, cleaning or editing data. Backing up and restoring databases. Creating, updating or deleting databases."
            ]},

            {Key: 9, Title:"SharePoint", List:["Testing and documenting internal and client SharePoint sites, including workflows and other site functionalities.", 
            "Creating SharePoint test environments with all the functionalities such as workflows (Workflow 2010 and Workflow 2013), content types and custom JavaScript.",
            "Providing support by debugging and fixing any issues for any external clients using Jira."
            ]},

            {Key: 10, Title:"Other", List:["Installing and testing server patching.", 
            "Discussing the design and functionalities of upcoming projects."
            ]}]
            }                    
            />   
            <h3>EDUCATION AND TRAINING</h3>     
            <Work
            WorkDate="26/11/2021 – CURRENT – Triq Kordin, Raħal Ġdid, Paola, Malta" 
            WorkTitle="MASTER OF SCIENCE IN INFORMATION TECHNOLOGY AND SYSTEMS" WorkPos="MCAST" 
            WorkDesc=""                    
            Skills = 
            { 
                [{Title:"Units", List:["Network Protocols and Network Automation.", 
                "Foundations of Cyber Security.",
                "Mobile Computing and 5G Networking.",
                "Internet of Things (IoT)",
                "Entrepreneurship and Innovation Management",
                "Information Systems and Management",
                "Operating Systems and Cloud Computing",
                "Data Science and Predictive Analysis",
                "Web Technologies and Secure E-Commerce",
                "Financial Computing and Cryptocurrencies"
            ]}]
            }                    
            />
            <Work
            WorkDate="01/10/2017 – 12/07/2020 – Triq Kordin, Raħal Ġdid, Paola, Malta" 
            WorkTitle="BACHELOR OF SCIENCE (HONS) IN SOFTWARE DEVELOPMENT" WorkPos="MCAST" 
            WorkDesc="BSc (Hons) In Software Development - Second Grade"                    
            Skills = 
            { 
                [{Title:"Units", List:[
                    "Database Programming 1         ",
                    "Database Programming 2        ",
                    "Object oriented Programming    ",
                    "Software Engineering           ",
                    "Mobile Application Development ",
                    "Data Structures & Algorithms 1",
                    "Data Structures & Algorithms 2",
                    "Low Level Programming          ",
                    "Large Databases I              ",
                    "Web Programming                ",
                    "Informatics                    ",
                    "Application Software           ",
                    "Windows Programming            ",
                    "System Analysis and Modeling   ",
                    "Development Platforms for Smart Systems",
                    "Data Security                  ",
                    "Image Processing and Computer Vision",
                    "Applied Computational Intelligence",
                    "Programming for the Cloud      ",
                    "Statistics for Computer Science",
                    "Business Intelligence & Reporting",
                    "Test Driven Development        ",
                    "Enterprise programming         ",
                    "Distributed Programming        ",
                    "Intrapersonal and Interpersonal",
                    "Entrepreneurship               ",
                    "Dissertation                   ",
                    "IT Project                     ",
                    "Content Management Systems     ",
                    "Discrete Maths                 "
                ]}]
            }                    
            />
            <Work
            WorkDate="30/08/2018 – 23/12/2018 – Lielā iela 2, Jelgava, LV-3001, Latvia, Jelgava, Latvia" 
            WorkTitle="ERASMUS+ EUROPASS CERTIFICATE" WorkPos="MCAST" 
            WorkDesc="Erasmus In: University of Life Science and Technology"                    
            Skills = 
            { 
                [{Title:"Units", List:[
                    "Application Software",
                    "Large Databases",
                    "Windows Programming",
                    "Web Development using Asp.net",
                    "System analysis and Modeling",
                    "Informatics",
                    "Smart System Development Platforms"                       
                ]}]
            }                    
            />
            <div className='spacer'></div>
            </div>
            </section>
            )
            }
}
