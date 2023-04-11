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
        {project_id : 0, project_name : 'test', image_0 : test_img, image_0_alt : 'test_image', image_1 : test_img_1, image_1_alt : 'test_image', image_2 : test_img_2, image_2_alt : 'test', short_description : 'test_short', long_description : `
        Morbi ultricies porta ex at aliquet. Suspendisse mollis lacus ac neque imperdiet sagittis. Sed eu ipsum eget lorem placerat ullamcorper. Ut iaculis arcu nec mauris eleifend condimentum. Vivamus tincidunt augue nec tortor laoreet, quis mollis tortor consequat. In nec odio pellentesque leo molestie congue. In vestibulum luctus semper. Mauris maximus accumsan purus in vestibulum. Pellentesque non dolor sollicitudin, tempus purus nec, tincidunt mi. Phasellus neque lectus, efficitur et porttitor ac, consectetur vehicula nibh. Pellentesque faucibus, lorem id placerat egestas, est libero tristique arcu, in mattis mauris turpis a erat. Proin vel ex ut augue iaculis feugiat. Maecenas in lectus sem. Vivamus sollicitudin facilisis velit eu auctor. Nunc eget diam tempus, consectetur orci at, tincidunt ligula.
        
        Etiam egestas suscipit sem, pharetra suscipit purus malesuada eget. Integer tortor dolor, luctus ac fringilla et, interdum nec orci. Sed ultrices odio nec enim malesuada, at cursus velit laoreet. Maecenas eu mauris in ligula pretium viverra non nec nunc. Maecenas blandit iaculis mattis. Ut arcu quam, venenatis pellentesque lorem vel, vulputate accumsan diam. Vivamus eget purus scelerisque, vehicula lectus non, dapibus arcu. Donec nec quam vitae eros sagittis sollicitudin ut ac lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam suscipit, lacus et aliquet faucibus, nulla elit viverra nibh, vel pulvinar mi odio sit amet orci. Nulla metus ligula, laoreet eget dui vel, ultricies sollicitudin ante. Maecenas condimentum volutpat nisi, vitae scelerisque est vestibulum in. Vivamus a quam at quam ornare imperdiet. Pellentesque tempus, dolor at sollicitudin bibendum, odio mi luctus ligula, a vulputate massa justo in tortor. Cras tellus nisi, condimentum non elit ac, laoreet vulputate tortor.
        
        Nulla ac purus augue. Mauris a hendrerit arcu. Curabitur nulla tellus, vehicula ac fringilla eget, vehicula sit amet ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec nec nulla id est suscipit mollis in et tortor. Suspendisse in interdum augue. Fusce nibh diam, luctus a semper eu, sagittis id nulla. Aliquam non leo sit amet mauris faucibus efficitur non vitae purus. Aliquam at pretium nisi, nec ullamcorper sapien. Sed congue mauris ac justo pharetra, id convallis lectus pellentesque. Curabitur pellentesque erat et massa dapibus malesuada.
        
        Suspendisse mollis, elit vitae malesuada tempus, mi risus tincidunt nisi, eget malesuada diam justo id ante. Maecenas tristique, eros ac egestas iaculis, augue dui porta leo, vitae fringilla lorem est a sapien. Suspendisse potenti. Pellentesque egestas sollicitudin mi in semper. Quisque tempor laoreet.`},
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