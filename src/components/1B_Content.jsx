import { About } from "./1B_Content_Children/0A_About"
import { TechStack } from "./1B_Content_Children/0B_Tech_Stack"
import { ProjectsList } from "./1B_Content_Children/0C_Projects_List"

export const Content = () =>
{
    return(
        <div id="Content">
            <About />
            <TechStack />
            <ProjectsList />
        </div>
    )
}