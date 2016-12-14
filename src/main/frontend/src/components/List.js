import React, { Component } from 'react';
import {Label} from 'react-bootstrap';
import Card from './Card';
import AddButton from './AddButton';

class List extends Component {
    getAddButtonForTODO(){
        if (this.props.id === "todo"){
            return(
                <AddButton onAddCard={this.props.onAddCard}/>
            );
        }
    }
    render(){
        var cards = this.props.cards.map((card) => {
            return <Card id={card.id}
                         title={card.title}
                         description={card.description}
                         status={card.status}
                         onDeleteCard={this.props.onDelete}/>
        });
        return (
            <div className="list">
                <h1 className="list-title"><Label>{this.props.title}</Label></h1>
                {cards}
                {this.getAddButtonForTODO()}
            </div>
        );
    }
}
export default List;
