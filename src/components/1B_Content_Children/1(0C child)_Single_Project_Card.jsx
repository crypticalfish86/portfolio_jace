import { useState } from "react"

export const SingleProjectCard = (props) =>
{
    const project = props.project;
    const longBeDesc = project.long_be_description;
    const longFeDesc = project.long_fe_description;

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
        <div className="Single_Project_Card_Expanded">
            <h3 id="Single_Project_Header"> {project.project_name} </h3>
            <div className="Single_Project_Card_Body_Expanded">
                <div className="Single_Project_Card_Information_Expanded">
                    <div>{longBeDesc}</div>
                    <img src={project.image_1} alt="" className="Single_Project_Image"/>
                    <div>{longFeDesc}</div>
                    <img src={project.image_2} alt="" className="Single_Project_Image"/>
                </div>
                <button onClick={(event) => {collapseCard(event)}} className="Single_Project_Card_Collapse_Button">Read Less</button>
            </div>
        </div>
        :
        <div className="Single_Project_Card_Shortened">
            <h3 id="Single_Project_Header"> {project.project_name} </h3>
            <div className="Single_Project_Card_Body_Shortened">
                <img src={project.image_0} alt={project.image_1_alt} className="Single_Project_Image_Logo"/>
                <div className="Single_Project_Card_Information_Shortened">
                    <div>{project.short_description}</div>
                </div>
            </div>
            <button onClick={(event) => {expandCard(event)}} className="Single_Project_Card_Expand_Button">Read More</button>
        </div>
    )
}