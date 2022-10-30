import {FC, ReactElement} from "react";
import { ReactTypical } from '@deadcoder0904/react-typical';

const Title : FC = ({}) : ReactElement => {
    return(
        <div id="Title">
            <h1>Journal Entries about: <br />
            <ReactTypical 
                steps={["Programming", 1000, "Experiences", 1000, "Mistakes", 1000, "Projects", 1000]}
                loop={Infinity}
                wrapper="span"
            /></h1>
        </div>
    )
}

export default Title;