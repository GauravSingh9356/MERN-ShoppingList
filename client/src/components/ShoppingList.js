import React, {Component} from 'react'

import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'

import {connect} from 'react-redux'
import {get_ITEMS, deleteItem} from '../actions/itemActions'

import {CSSTransition, TransitionGroup} from 'react-transition-group'
import PropTypes from 'prop-types'

class ShoppingList extends Component{
   componentDidMount(){
       this.props.get_ITEMS();
   }

   onDeleteClick=(id)=>{
       this.props.deleteItem(id);
   }
    render(){
        
        const {items}= this.props.item;
        return(
            <Container>
               
                <ListGroup>
                   
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id, name})=>{
                            return (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                    <Button className="remove-btn"
                    color="danger"
                    size="sm" onClick={this.onDeleteClick.bind(this, _id)}
                    >
                        &times;

                    </Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            )

                            
                        })}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes={
    get_ITEMS: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
    item: state.item
})

export default connect(mapStateToProps, {get_ITEMS, deleteItem})(ShoppingList)