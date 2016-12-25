import React, { Component } from 'react';
import List from './List';
import {Grid, Row, Col} from 'react-bootstrap';

class KanbanBoard extends Component {
    render(){
        return(
            <Grid>
                <Row className="show-grid">
                    <Col sm={4} md={4}>
                        <List id={"todo"}
                        title="TO DO"
                        cards={this.props.cards.filter((card) => card.status === "TODO")}
                        onDeleteCard={this.props.onDeleteCard}
                        onChangeCardStatus={this.props.onChangeCardStatus}
                        onAddCard={this.props.onAddCard}/>
                    </Col>
                    <Col sm={4} md={4}>
                        <List id="doing"
                        title="DOING..."
                        cards={this.props.cards.filter((card) => card.status === "DOING")}
                        onDeleteCard={this.props.onDeleteCard}
                        onChangeCardStatus={this.props.onChangeCardStatus}/>
                    </Col>
                    <Col sm={4} md={4}>
                        <List
                        id="done"
                        title="DONE!"
                        cards={this.props.cards.filter((card) => card.status === "DONE")}
                        onDeleteCard={this.props.onDeleteCard}
                        onChangeCardStatus={this.props.onChangeCardStatus}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default KanbanBoard;
