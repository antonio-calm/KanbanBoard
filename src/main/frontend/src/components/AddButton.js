import React, { Component } from 'react';
import {Button, Glyphicon, Collapse, Well, FormGroup, FormControl} from 'react-bootstrap';

class AddButton extends Component {
    constructor(...args) {
        super(...args);

        this.state = {};
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
                                     placeholder="Enter task title"
                        />
                        <FormControl id="input-description"
                                     componentClass="textarea"
                                     placeholder="Enter task description"
                        />
                        <Button type="submit" bsStyle="success" bsSize="small" block>
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
