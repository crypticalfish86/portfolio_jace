import { SingleProjectCard } from "./1(0C child)_Single_Project_Card"
import test_img from "../../Assests/test_img.jpg"
import nc_news_fe from "../../Assests/NC_News_Front_End.png"
import nc_news_logo from "../../Assests/NC_News_Logo.png"

export const ProjectsList = () =>
{
    const projectObject =
    [
        {project_id : 0, project_name : 'test', image_0 : test_img, image_0_alt : 'test_image', image_1 : '', image_1_alt : 'test_image', image_2 : '', image_2_alt : 'test', short_description : 'test_short', long_description : 'teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeessttt_looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooongg'},
        {project_id : 1, project_name : 'Nc_News', image_0 : nc_news_logo, image_0_alt : '', image_1 : nc_news_fe, image_1_alt : '', image_2 : '', image_2_alt : '', short_description : 'Nc_News was my first full-stack project at Northcoders using a PSQL express backend framework hosted on render and a react.js frontend hosted on netlify', long_description : ''},
        {project_id : 2, project_name : 'A-bit', image_0 : '', image_0_alt : '', image_1 : '', image_1_alt : '', image_2 : '', image_2_alt : '', short_description : '', long_description : ''},
        {project_id : 3, project_name : 'C-Testing-Playground', image_0 : '', image_0_alt : '', image_1 : '', image_1_alt : '', image_2 : '', image_2_alt : '', short_description : '', long_description : ''},
    ]
    return(
        <div className="Content_Child">
            Projects List
            {projectObject.map((project) => {return <SingleProjectCard project={project}/>})}
        </div>
    )
}