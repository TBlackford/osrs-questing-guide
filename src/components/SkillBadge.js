import React from 'react';
import RuneScapeIcon from "./RuneScapeIcon";

const SkillBadge = ({skill}) => {
    return (
        <div className="columns">
            <div className="column is-1">
                <RuneScapeIcon iconName={skill} />
            </div>
            <div className="column is-1">
                <p>1 / 99</p>
            </div>
        </div>
    )
};

export default SkillBadge;
