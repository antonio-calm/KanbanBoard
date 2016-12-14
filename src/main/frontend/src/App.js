import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import KanbanBoard from './components/KanbanBoard';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cards: []
        };
        this.onDeleteCard = this.onDeleteCard.bind(this);
        this.updateCards = this.updateCards.bind(this);
        this.onAddCard = this.onAddCard.bind(this);
    }
    
    componentDidMount() {
        this.updateCards();
    }
    
    updateCards() {
        $.get("/cards", (data) => {
            this.setState({cards: data})
        });
    }

    onDeleteCard(id) {
         $.post("/card/delete/" + id, null, () => this.updateCards());
        console.log("/card/delete/" + id);
    }

    onAddCard(title, description) {
        $.ajax({
            type: "POST",
            url: "/card/add",
            data: {name: title, description: description},
            success: () => this.updateCards()
        });
    }
    
render() {
        return(
            <KanbanBoard 
            cards={this.state.cards} 
            onAddCard={this.onAddCard} 
            onDeleteCard={this.onDeleteCard}
            onAddCard={this.onAddCard}/>
        )
    }
}


export default App;
