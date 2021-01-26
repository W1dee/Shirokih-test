import React from 'react';
import Card from './Card'

class Cards extends React.Component {
    constructor() {
        super();
        this.state={
            cards: [
                {id: 0, title: "Карточка 0", text: "Текст карточки 0", checked: false, editMode: true},
                {id: 1, title: "Карточка 1", text: "Текст карточки 1", checked: true, editMode: false},
                {id: 2, title: "Карточка 2", text: "Текст карточки 2", checked: false, editMode: false},
                {id: 3, title: "Карточка 3", text: "Текст карточки 3", checked: false, editMode: false},
                {id: 4, title: "Карточка 4", text: "Текст карточки 4", checked: false, editMode: false}
            ]
        }
        this.changeCheck = this.changeCheck.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    changeCheck = id => {
        const arr = this.state.cards;
        const result = [
            ...arr.slice(0, id),
            {...arr[id], checked: !this.state.cards[id].checked},
            ...arr.slice(id+1)
        ];
        this.setState({cards: result});
    }
    changeMode = id => {
        const arr = this.state.cards;
        const result = [
            ...arr.slice(0, id),
            {...arr[id], checked: false, editMode: !this.state.cards[id].editMode},
            ...arr.slice(id+1)
        ];
        this.setState({cards: result});
    }
    
    changeText(id, newTitle) {
        const arr = this.state.cards;
        const result = [
            ...arr.slice(0, id),
            {...arr[id], title: newTitle, checked: false, editMode: false},
            ...arr.slice(id+1)
        ];
        this.setState({cards: result});
    }


    render(){
        return(
            <div className="divCards">
                {this.state.cards.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                        changeCheck={() => this.changeCheck(card.id)}
                        changeMode={() => this.changeMode(card.id)}
                        changeText={this.changeText}
                        setNewText={this.setNewText}
                    />
                ))}
            </div>
        )
    }
}

export default Cards;