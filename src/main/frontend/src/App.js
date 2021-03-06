import React, { Component } from 'react';
import $ from 'jquery';
import KanbanBoard from './components/KanbanBoard';

class App extends Component {
    constructor() {
        super();
        this.state = {cards: []};
        this.onDeleteCard = this.onDeleteCard.bind(this);
        this.updateCards = this.updateCards.bind(this);
        this.onAddCard = this.onAddCard.bind(this);
        this.onChangeCardStatus = this.onChangeCardStatus.bind(this);
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
      $.ajax({
          type: "DELETE",
          url: "/card/" + id,
          success: () => this.updateCards()
      });
    }

    onAddCard(title, description) {
        $.ajax({
            type: "POST",
            url: "/cards/add",
            data: {title: title, description: description},
            success: () => this.updateCards()
        });
    }

    onChangeCardStatus(id, current_status){
      let new_status = "";
      if (current_status === "TODO") {
        new_status = "DOING";
      } else if (current_status === "DOING"){
        new_status = "DONE";
      } else if (current_status === "DONE") {
        new_status = "TODO";
      }

      $.ajax({
          type: "PUT",
          url: "/card/" + id,
          data: {status: new_status},
          success: () => this.updateCards()
      });
    }

render() {
        return(
            <KanbanBoard
            cards={this.state.cards}
            onAddCard={this.onAddCard}
            onDeleteCard={this.onDeleteCard}
            onChangeCardStatus={this.onChangeCardStatus}/>
        )
    }
}


export default App;
