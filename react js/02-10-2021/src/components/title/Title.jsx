import Css from "./title.module.css";

function Title() {
    return(
        <div>
            <h1 className = {Css.heading}>My Website</h1>
        <h2 className = "subHeading">xyz</h2>
        </div>
        
    ) 
}

export default Title;