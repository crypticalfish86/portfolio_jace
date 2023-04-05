import { useState } from "react"

export const SingleProjectCard = (props) =>
{
    const project = props.project
    /*add button in here that expands the page to display the full content
    information of the project */
    const [expandedBool, setExpandedBool] = useState(false);
    function expandCard(event)
    {
        event.preventDefault();
        setExpandedBool(true);
    }
    function collapseCard(event)
    {
        event.preventDefault();
        setExpandedBool(false);
    }
    return(
        expandedBool?
        <div className="Single_Project_Card">
            <h3 id="Single_Project_Header"> {project.project_name} </h3>
            <div className="Single_Project_Card_Body">
                <img src={project.image_0} alt={project.image_1_alt} className="Single_Project_Image"/>
                <div className="Single_Project_Card_Information">
                    <div>{project.long_description}</div>
                    <div onClick={(event) => {collapseCard(event)}} className="Single_Project_Card_Expand_Collapse_Button">Read Less</div>
                </div>
            </div>
        </div>
        :
        <div className="Single_Project_Card">
            <h3 id="Single_Project_Header"> {project.project_name} </h3>
            <div className="Single_Project_Card_Body">
                <img src={project.image_0} alt={project.image_1_alt} className="Single_Project_Image"/>
                <div className="Single_Project_Card_Information">
                    <div>{project.short_description}</div>
                    <div onClick={(event) => {expandCard(event)}} className="Single_Project_Card_Expand_Collapse_Button">Read Less</div>
                </div>
            </div>
        </div>
    )
}