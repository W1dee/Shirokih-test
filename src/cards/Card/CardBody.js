import React from 'react';

function CardBody({text, editMode, ...props}) {

    return(
        <div className="cardHeader">
            {!editMode ? (
                <>
                    <p>{text}</p>
                </>
            ) : (
                <>
                <textarea defaultValue={text} />
                </>
            )}
            
        </div>
    )
}

export default CardBody;