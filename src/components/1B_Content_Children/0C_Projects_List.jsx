import { SingleProjectCard } from "./1(0C child)_Single_Project_Card"
import test_img from "../../Assests/test_img.jpg"

export const ProjectsList = () =>
{
    const projectObject =
    [
        {project_id : 0, project_name : 'test', image_1 : test_img, image_1_alt : 'test_image', image_2 : '', image_2_alt : 'test', short_description : 'test_short', long_description : 'teeeeeeessttt_loooongg'},
        {project_id : 1, project_name : 'Nc_News', image_1 : '', image_1_alt : '', image_2 : '', image_2_alt : '', short_description : '', long_description : ''},
        {project_id : 2, project_name : 'A-bit', image_1 : '', image_1_alt : '', image_2 : '', image_2_alt : '', short_description : '', long_description : ''},
        {project_id : 3, project_name : 'C-Testing-Playground', image_1 : '', image_1_alt : '', image_2 : '', image_2_alt : '', short_description : '', long_description : ''},
    ]
    return(
        <div className="Content_Child">
            Projects List
            {projectObject.map((project) => {return <SingleProjectCard project={project}/>})}
        </div>
    )
}