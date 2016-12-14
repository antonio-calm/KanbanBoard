import React, { Component } from 'react';
import {Button, Collapse, Well} from 'react-bootstrap';
import CardButtons from './CardButtons';

class Card extends Component{
    constructor(...args) {
        super(...args);

        this.state = {};
    }

    getButtonStyle(){
        if (this.props.status === "todo") {
            return "info";
        }
        else if (this.props.status === "doing") {
            return "warning";
        } else {
            return "success";
        }
    }

    render() {
        return (
            <div className="card">
                <Button block bsStyle={this.getButtonStyle()} onClick={ ()=> this.setState({ open: !this.state.open })}>
                    {this.props.title}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <p className="card-description">
                                {this.props.description}
                            </p>
                            <CardButtons status={this.props.status} id={this.props.id} onDeleteCard={this.props.onDeleteCard}/>
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}
export default Card;
