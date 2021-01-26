import React from 'react';
import CardHeader from './Card/CardHeader';

function Card({card, changeCheck, changeMode, changeText, setNewText, ...props}) {
    return(
        <div className={card.checked ? "divCard" : "divCard new"}>
            <CardHeader
                title={card.title}
                cardId={card.id}
                editMode={card.editMode}
                changeCheck={changeCheck}
                changeMode={changeMode}
                changeText={changeText}
                setNewText={setNewText}
            />
        </div>
    )
}

export default Card;