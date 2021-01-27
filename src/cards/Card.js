import React, {useRef} from 'react';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';

function Card({card, changeCheck, changeMode, changeText, setNewText, ...props}) {
    var newTextHeader = useRef(null);
    var newTextBody = React.createRef();

    const tmpChange = () => {
        //changeText(card.id, newTextHeader.value);
        console.log(""+card.id+" "+newTextHeader);
    }

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
                newTextHeader={newTextHeader}
                tmpChange={tmpChange}
            />
            <hr style={{width: 380, margin: "0 auto"}} />
            <CardBody
                text={card.text}
                editMode={card.editMode}
            />
        </div>
    )
}

export default Card;