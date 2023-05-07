import React from "react";

const SingleCards = ({
    iconName,
    txtMain
}) => {
    return(
        <span className='card'>
            <span className='card-main-heading'>
                {txtMain}
            </span>
            <span className='card-info'>
                <ion-icon name={iconName}></ion-icon>
                <span className='card-info-msg'>
                 
                </span>
            </span>
        </span>
    )
}


export default SingleCards