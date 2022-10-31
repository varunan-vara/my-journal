import React, {FC, ReactElement} from "react";
import Card from "./Card";

const Homepage : FC = ({}) : ReactElement => {
    return(
        <div id="Homepage">
            <br /> <br /><br /><br />
            <h2>Recent Posts</h2>
            <Card 
            title="Sample Title"
            date={1667101702}
            description="sample description"
            author="Joe"
            toPath="#"
            />
            <Card 
            title="Sample Title"
            date={1667101702}
            description="sample description"
            author="Joe"
            toPath="#"
            />
            <Card 
            title="Sample Title"
            date={1667101702}
            description="sample description"
            author="Joe"
            toPath="#"
            />
        </div>
    )
}

export default Homepage;