import React from 'react';
import {AiOutlineEdit, AiOutlineCheck, AiOutlineCloseCircle} from 'react-icons/ai'

function CardHeader({title, cardId, editMode, changeCheck, changeMode, changeText, setNewText, ...props}) {

    var newTextHeader = React.createRef();

    const tmpCh = () => {
        changeText(cardId, newTextHeader.value);
    }

    return(
        <div className="cardHeader">
            {!editMode ? (
                <>
                    <h3>{title}</h3>
                    <AiOutlineEdit 
                        size="30px" 
                        style={{margin: "auto 0", marginLeft: "auto"}}
                        onClick={changeMode}
                    />
                    <input 
                        type="checkbox" 
                        className="checkbox" 
                        style={{margin: "auto 10px"}} 
                        onChange={changeCheck} 
                    />
                </>
            ) : (
                <>
                    <input 
                        className="input" 
                        defaultValue={title}
                        ref={(ref) => {newTextHeader = ref;}}
                    />
                    <AiOutlineCheck
                        size="30px" 
                        style={{margin: "auto 0", marginLeft: "auto"}} 
                        onClick={tmpCh}
                    />
                    <AiOutlineCloseCircle 
                        size="30px" 
                        style={{margin: "auto 10px"}} 
                        onClick={changeMode}
                    />
                </>
            )}
            
        </div>
    )
}

export default CardHeader;