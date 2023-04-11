import { useEffect, useState, useRef } from "react"

export const SingleProjectCard = (props) =>
{
    const project = props.project
    
    let projectDescription1 = useRef("starter_string_fe");
    let projectDescription2 = useRef("starter_string_be");

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

    useEffect(() => 
    {
        if(project.long_description.length !== 0)
        {
            console.log(project.long_description)
            for(let i = (project.long_description.length / 2); i < project.long_description.length; i++)
            {
                if(project.long_description[i] === " ")
                {
                    projectDescription1.current = project.long_description.slice(0, i);
                    projectDescription2.current = project.long_description.slice(i)
                }
            }
        }else
        {
            console.log("error: empty string")
        }
    }, [expandedBool]);

    return(
        expandedBool?
        <div className="Single_Project_Card_Expanded">
            <h3 id="Single_Project_Header"> {project.project_name} </h3>
            <div className="Single_Project_Card_Body">
                <div className="Single_Project_Card_Information_Expanded">
                    <div>{projectDescription1}</div>
                    <img src={project.image_1} alt="" className="Single_Project_Image"/>
                    <div>{projectDescription2}</div>
                    <img src={project.image_2} alt="" className="Single_Project_Image"/>
                    <div onClick={(event) => {collapseCard(event)}} className="Single_Project_Card_Expand_Collapse_Button">Read Less</div>
                </div>
            </div>
        </div>
        :
        <div className="Single_Project_Card_Shortened">
            <h3 id="Single_Project_Header"> {project.project_name} </h3>
            <div className="Single_Project_Card_Body">
                <img src={project.image_0} alt={project.image_1_alt} className="Single_Project_Image_Logo"/>
                <div className="Single_Project_Card_Information_Shortened">
                    <div>{project.short_description}</div>
                    <div onClick={(event) => {expandCard(event)}} className="Single_Project_Card_Expand_Collapse_Button">Read More</div>
                </div>
            </div>
        </div>
    )
}