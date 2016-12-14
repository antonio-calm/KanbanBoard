import React, { Component } from 'react';
import {Button, Glyphicon, Collapse, Well, FormGroup, FormControl} from 'react-bootstrap';

class AddButton extends Component {
    constructor(...args) {
        super(...args);

        this.state = {};
        this.title = "";
        this.description = "";
    }
    
    handleTitleChange(e) {
        this.setState({title: e.target.value});
    }
        
    handleDescriptionChange(e) {
        this.setState({description: e.target.value});
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
                                     onChange={this.handleTitleChange}
                        />
                        <FormControl id="input-description"
                                     componentClass="textarea"
                                     placeholder="Enter task description"
                                     onChange={this.handleDescriptionChange}
                        />
                        <Button bsStyle="success" bsSize="small" block
                            onClick={() => {
                                     this.setState({title:"", text:""});
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
