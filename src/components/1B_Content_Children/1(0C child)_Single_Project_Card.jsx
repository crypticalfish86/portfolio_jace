import { useState } from "react"

export const SingleProjectCard = (props) =>
{
    const project = props.project
    /*add button in here that expands the page to display the full content
    information of the project */
    const [expandedBool, setExpandedBool] = useState(false)
    return(
        expandedBool?
        <div className="Single_Project_Card">
            <h3 id="Single_Project_Header"> {project.project_name} </h3>
            <div>
                <img src={project.image_1} alt={project.image_1_alt} className="Single_Project_Image"/>
                <div>{project.long_description}</div>
            </div>
        </div>
        :
        <div className="Single_Project_Card">
            <h3 id="Single_Project_Header"> {project.project_name} </h3>
            <div>
                <img src={project.image_1} alt={project.image_1_alt} className="Single_Project_Image"/>
                <div>{project.short_description}</div>
            </div>
        </div>
    )
}