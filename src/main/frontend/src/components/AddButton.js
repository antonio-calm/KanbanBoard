import React, { Component } from 'react';
import {Button, Glyphicon, Collapse, Well, FormGroup, FormControl} from 'react-bootstrap';

class AddButton extends Component {
    constructor(...args) {
        super(...args);

        this.state = {};
        this.state.title = "";
        this.state.description = "";
    }

    render(){
        return(
            <div>
              <Button bsStyle="default" block onClick={ ()=> this.setState({ open: !this.state.open })}>
                <Glyphicon glyph="plus-sign"/>
              </Button>

              <Collapse in={this.state.open}>
                <div>
                  <Well>
                    <form>
                      <FormGroup>
                        <FormControl id="input-title"
                                     type="text"
                                     value={this.state.title}
                                     placeholder="Enter task title"
                                     onChange={(event) => {this.setState({title: event.target.value})}}
                        />
                        <FormControl id="input-description"
                                     componentClass="textarea"
                                     value={this.state.description}
                                     placeholder="Enter task description"
                                     onChange={(event) => {this.setState({description: event.target.value})}}
                        />
                        <Button bsStyle="success" bsSize="small" block
                            onClick={() => {
                                      this.setState({title:"", description:""});
                                      this.props.onAddCard(this.state.title, this.state.description);
                                    }}>
                          Add
                        </Button>
                      </FormGroup>
                    </form>
                  </Well>
                </div>
              </Collapse>
            </div>
        );
    }
}
export default AddButton;
