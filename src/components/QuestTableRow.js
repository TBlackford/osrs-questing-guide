import React from 'react';
import SkillBadge from "./SkillBadge";

const QuestTableRow = () => {
    return (
        <div className="box">
            <ul>
                <li>
                    Tutorial Island
                </li>
                <li>
                    <SkillBadge skill="Prayer"/>
                </li>
            </ul>
        </div>

    )
};

export default QuestTableRow;
