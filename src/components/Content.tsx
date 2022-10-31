import {FC, ReactElement, useState} from "react";
import { useLocation  } from "react-router-dom";
import { getArticlebyName } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Content : FC = ({}) : ReactElement => {

    const navigate = useNavigate();
    
    const path = useLocation().pathname.split("/");
    const articleName = path[2];
    //console.log("Article Name: ", articleName);
    var dataRetrieved : boolean;

    const [title, setTitle] = useState("Loading Article...");
    const [descr, setDescr] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper vestibulum magna. ");
    const [date, setDate] = useState("0000/00/00")
    const [articleContent, setArticleContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia nulla velit. Proin lacus erat, consectetur vel dolor ut, tempor fringilla urna. Sed velit elit, volutpat nec vulputate ut, mattis nec ex. Aenean ac ex eros. Aliquam erat volutpat. In euismod tellus nibh, nec pharetra justo porta vel. In sed bibendum tortor, sit amet tempus tellus. In fringilla ut erat eu pellentesque. Pellentesque eget dictum eros, a convallis nisl. Aenean eu turpis ligula. Mauris sed commodo massa. Duis auctor ultrices justo, nec molestie ex dictum a. Phasellus quis lacus eget ligula hendrerit efficitur.");

    getArticlebyName(articleName).then((result) => {
        if (result.title != "No Data Retrieved") {
            setTitle(result.title);
            setDescr(result.description);
            const articleDate = new Date(result.date * 1000);
            setDate(`Published: ${articleDate.getFullYear()}/${articleDate.getMonth() + 1}/${articleDate.getDate()}`)
            
        } else {
            //Navigate to page doesn't exist
            navigate("/404");
        }
    });

    return(
        <div id="Content">
            <h1 id="ContentTitle">{title}</h1>
            <p id="ContentDescr">{descr}</p>
            <p id="ContentDate">{date}</p>
            <p className="ContentP">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia nulla velit. Proin lacus erat, consectetur vel dolor ut, tempor fringilla urna. Sed velit elit, volutpat nec vulputate ut, mattis nec ex. Aenean ac ex eros. Aliquam erat volutpat. In euismod tellus nibh, nec pharetra justo porta vel. In sed bibendum tortor, sit amet tempus tellus. In fringilla ut erat eu pellentesque. Pellentesque eget dictum eros, a convallis nisl. Aenean eu turpis ligula. Mauris sed commodo massa. Duis auctor ultrices justo, nec molestie ex dictum a. Phasellus quis lacus eget ligula hendrerit efficitur.

</p>
        </div>
    )
}

export default Content;