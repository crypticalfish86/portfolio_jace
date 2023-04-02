export const SingleProjectCard = (props) =>
{
    const project = props.project;
    return(
        <div id="Single_Project_Card">
            <h3>
                {project.title}
            </h3>
            <img src={project.image_1} alt={project.image_1_alt}/>
            <img src={project.image_2} alt={project.image_2_alt}/>
            <div>
                {project.description}
            </div>
        </div>
    )
}