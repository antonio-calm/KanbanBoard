import React, { Component } from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

class CardButtons extends Component{

    getButtonName(){
        if (this.props.status === "todo") {
            return "Start";
        }
        else if (this.props.status === "doing") {
            return "Done";
        } else {
            return "Redo";
        }
    }

    render(){
        return(
            <div className="card-buttons-group">
              <ButtonGroup justified>
                <Button bsStyle="danger" bsSize="small" href="#" onClick={() => this.props.onDeleteCard(this.props.id)}>
                  Remove
                </Button>
                <Button bsStyle="success" bsSize="small" href="#" onClick={() => this.props.onChangeCardStatus(this.props.id, this.props.status)}>
                    {this.getButtonName()}
                </Button>
              </ButtonGroup>
            </div>
        );
    }
}
export default CardButtons;
