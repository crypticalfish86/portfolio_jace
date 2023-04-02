import { SingleProjectCard } from "./2_Single_Project_Card"

export const ProjectsList = () =>
{
    const projectsObject = 
    [
        {title : 'nc_news', image_1 : 'placeholder', image_1_alt: 'image_1_nc_news', image_2 : 'placeholder', image_2_alt: 'image_2_nc_news', description : 'placeholder nc_news'},
        {title : 'a-bit', image_1 : 'placeholder', image_1_alt: 'image_1_a-bit', image_2 : 'placeholder', image_2_alt: 'image_2_a-bit', description : 'placeholder a-bit'},
        {title : 'C-testing playground', image_1 : 'placeholder', image_1_alt: 'image_1_C-testing_Playground', image_2 : 'placeholder', image_2_alt: 'image_2_C-Testing_playground', description : 'placeholder C-testing playground'}
    ]

    return(
        <div>
            {projectsObject.map((project) => {return <SingleProjectCard project={project}/>})}
        </div>
    )
}