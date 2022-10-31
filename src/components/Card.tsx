import React, {FC, ReactElement} from "react";
import { Link } from "react-router-dom";

interface content {
    title:string;
    description:string;
    author:string;
    date:number;
    toPath:string;
}

const Card : FC<content> = ({
    title, description, author, date, toPath
}) : ReactElement => {

    var convertedTime = new Date(date);
    return(
        <div className="Card cardShadow">
            <Link to={toPath}><h4 className="cardH4">{title}</h4></Link>
            <p className="cardAuth">{author} - {description}</p>
            <p className="cardDate">{convertedTime.getFullYear()}/{convertedTime.getMonth()}/{convertedTime.getDate()}</p>
        </div>
    )
}

export default Card;