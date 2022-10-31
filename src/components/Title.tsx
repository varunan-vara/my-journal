import {FC, ReactElement} from "react";
import { ReactTypical } from '@deadcoder0904/react-typical';

const Title : FC = ({}) : ReactElement => {
    const timelen = 1600;
    return(
        <div id="Title">
            <h1>Journal Entries about: <br />
            <ReactTypical 
                steps={["Programming", timelen, "Experiences", timelen, "Mistakes", timelen, "Projects", timelen]}
                loop={Infinity}
                wrapper="span"
            /></h1>
        </div>
    )
}

export default Title;