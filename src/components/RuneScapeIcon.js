import React from 'react';

const RuneScapeIcon = ({iconName}) => {
    return (
        <img src={process.env.PUBLIC_URL + '/img/' + iconName + '_icon.png'} />
    )
};

export default RuneScapeIcon;
