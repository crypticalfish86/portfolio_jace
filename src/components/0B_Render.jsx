import { Header } from "./1A_Header"
import { Content } from "./1B_Content"
import { Footer } from "./1C_Footer"
import { Routes, Route } from "react-router-dom"
import { NcNewsProjectPage } from "./Single_Project_id/1_nc_news/0_Nc_News_Project_Page"
import { AbitProjectPage } from "./Single_Project_id/2_a_bit/0_A_Bit_Project_Page"
import { CTestingProjectPage } from "./Single_Project_id/3_C_Testing_Playground/0_C_Testing_Playground_Project_Page"

export const Render = () =>
{
    return(
        <div>
            <Routes>
                <Route path="/" element={<div><Header /><Content /><Footer /></div>} />
                <Route path="/project/1" element={<NcNewsProjectPage />}/>
                <Route path="/project/2" element={<AbitProjectPage />}/>
                <Route path="/project/3" element={<CTestingProjectPage />}/>
            </Routes>
        </div>
    )
}