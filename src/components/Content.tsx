import { time } from "console";
import {FC, ReactElement} from "react";
import { useLocation  } from "react-router-dom";
import { getArticlebyName } from "../firebase/firebase";


const Content : FC = ({}) : ReactElement => {
    
    const path = useLocation().pathname.split("/");
    const articleName = path[2];

    getArticlebyName(articleName).then(result => console.log("Result: ", result))


    return(
        <div id="Content">
            <h1 id="ContentTitle">The Title of An Entry</h1>
            <p id="ContentDescr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper vestibulum magna. </p>
            <p id="ContentDate">0000/00/00</p>
            <p className="ContentP">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia nulla velit. Proin lacus erat, consectetur vel dolor ut, tempor fringilla urna. Sed velit elit, volutpat nec vulputate ut, mattis nec ex. Aenean ac ex eros. Aliquam erat volutpat. In euismod tellus nibh, nec pharetra justo porta vel. In sed bibendum tortor, sit amet tempus tellus. In fringilla ut erat eu pellentesque. Pellentesque eget dictum eros, a convallis nisl. Aenean eu turpis ligula. Mauris sed commodo massa. Duis auctor ultrices justo, nec molestie ex dictum a. Phasellus quis lacus eget ligula hendrerit efficitur.

</p>
        </div>
    )
}

export default Content;