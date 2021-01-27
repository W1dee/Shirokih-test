import React from 'react';
import Card from './Card'

class Cards extends React.Component {
    constructor() {
        super();
        this.state={
            cards: [
                {id: 0, title: "Карточка 0", text: "Текст карточки 0", checked: false, editMode: true},
                {id: 1, title: "Карточка 1", text: "Текст карточки 1", checked: false, editMode: false},
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
        this.setState({
            cards: this.state.cards.map((card) => {
                if(card.id === id) {
                    return {
                        ...card,
                        checked: !card.checked,
                    };
                }
                return card;
            }),
        });
    }
    changeMode = id => {
        this.setState({
            cards: this.state.cards.map((card) => {
                if(card.id === id) {
                    return {
                        ...card,
                        checked: false,
                        editMode: !card.editMode,
                    };
                }
                return card;
            }),
        });
    }
    
    changeText(id, newTitle) {
        this.setState({
            cards: this.state.cards.map((card) => {
                if(card.id === id) {
                    return {
                        ...card,
                        title: newTitle,
                        checked: false,
                        editMode: false,
                    };
                }
                return card;
            }),
        });
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