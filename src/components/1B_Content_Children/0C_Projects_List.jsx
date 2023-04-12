import { SingleProjectCard } from "./1(0C child)_Single_Project_Card"
import test_img from "../../Assests/test_img_logo.jpg"
import test_img_1 from "../../Assests/test_img_1.jpg"
import test_img_2 from "../../Assests/test_img_2.jpg"
import nc_news_fe from "../../Assests/NC_News_Front_End.png"
import nc_news_logo from "../../Assests/NC_News_Logo.png"

export const ProjectsList = () =>
{
    const projectObject =
    [
        {project_id : 0, project_name : 'test', image_0 : test_img, image_0_alt : 'test_image', image_1 : test_img_1, image_1_alt : 'test_image', image_2 : test_img_2, image_2_alt : 'test', short_description : 'test_short', long_be_description: `
Vivamus eu lectus mauris. Nam ullamcorper massa a eleifend porttitor. In interdum quis nunc ac mollis. Vivamus felis mauris, pellentesque molestie erat eget, suscipit faucibus diam. Suspendisse sed risus rutrum, congue tortor sit amet, posuere sapien. Integer in finibus enim, vitae tristique elit. Vivamus id arcu quis velit elementum pharetra. Nunc pretium quam vitae quam aliquet imperdiet. Nunc libero urna, mollis vitae ultrices scelerisque, ornare in magna.

Vivamus sit amet accumsan ligula. Donec eleifend, enim eget venenatis pharetra, est risus egestas velit, a condimentum sapien tortor eu felis. Donec fringilla lorem a dui tempus placerat. Nulla facilisi. Quisque varius enim ut magna imperdiet fringilla. In eget urna sed sapien molestie pharetra. Proin elementum enim odio, ut aliquam elit consequat ac. Vivamus tellus lacus, finibus eget ultrices in, feugiat nec quam. Proin ut accumsan urna. Quisque rhoncus massa at elit facilisis posuere. Cras euismod libero eget lorem convallis, in eleifend mauris hendrerit. Pellentesque purus neque, scelerisque a maximus ac, eleifend vitae nunc. Integer id leo lobortis, iaculis leo et, tincidunt diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis quis dapibus quam, vitae maximus urna. In eget tellus aliquam, lobortis ante sit amet, venenatis purus. `, long_fe_description : `

Suspendisse ut purus elit. Integer laoreet ex ligula. Phasellus placerat tortor leo, sit amet mattis lacus aliquet ut. Sed id metus eu diam finibus pharetra sed vel felis. Donec massa felis, tempor et malesuada quis, consequat id massa. Aenean nisl dui, vulputate eget gravida non, ultricies vel odio. Etiam varius massa quis purus tempus, condimentum vulputate augue facilisis. Sed mauris mi, eleifend ac dolor a, fermentum gravida erat. Praesent vel nunc sapien. Praesent libero leo, imperdiet vel ligula ornare, posuere congue quam. Sed ut pellentesque dolor. In sodales metus ligula, non consequat erat placerat nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam luctus, felis quis tempor aliquam, turpis mauris placerat massa, vel ultrices mauris dolor at nibh. Phasellus gravida fermentum porta.

Suspendisse vitae sagittis turpis. In in risus eleifend orci blandit ultricies. Phasellus libero orci, dictum nec eros sit amet, convallis laoreet risus. Mauris sagittis euismod libero. Donec eget faucibus enim. In vitae tincidunt nulla. Proin sollicitudin imperdiet ligula at vestibulum. In et elementum elit, eu finibus tellus.

Donec aliquam risus eleifend risus dignissim scelerisque eget non lectus. Pellentesque eu ultricies ex. In lobortis eleifend rutrum. Etiam auctor a ipsum a fringilla. Etiam. `},
        {project_id : 1, project_name : 'Nc_News', image_0 : nc_news_logo, image_0_alt : '', image_1 : nc_news_fe, image_1_alt : '', image_2 : '', image_2_alt : '', short_description : 'Nc_News was my first full-stack project at Northcoders using a PSQL express backend framework hosted on render and a react.js frontend hosted on netlify', long_description : `not this one`},
        {project_id : 2, project_name : 'A-bit', image_0 : '', image_0_alt : '', image_1 : '', image_1_alt : '', image_2 : '', image_2_alt : '', short_description : '', long_description : `not this one`},
        {project_id : 3, project_name : 'C-Testing-Playground', image_0 : '', image_0_alt : '', image_1 : '', image_1_alt : '', image_2 : '', image_2_alt : '', short_description : '', long_description : `not this one`},
    ]
    return(
        <div className="Content_Child">
            Projects List
            {projectObject.map((project) => {return <SingleProjectCard project={project}/>})}
        </div>
    )
}