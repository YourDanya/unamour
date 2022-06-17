import React from "react";
import {getClasses} from "../../utils/component-utils";

type backProps = {
    handleClick?: () => void,
    mainClasses?: string[],
    lineClasses?: {left: string[], right: string[]}
}

const Back: React.FC<backProps> = ({handleClick, mainClasses, lineClasses}) => {
    return (
        <div className={`back ${getClasses(mainClasses)}`} onClick={handleClick}>
            <div className={`back__line back__line--first ${getClasses(lineClasses?.left)}`}/>
            <div className={`back__line back__line--last ${getClasses(lineClasses?.right)}`}/>
        </div>
    )
}

export default Back