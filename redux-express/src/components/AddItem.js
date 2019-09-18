import React, { Component } from 'react';
import addItemAction from '../actions/addItemAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddItem extends Component {

    state = {
        food: '',
        quantity: 0
    }

    submitItem = (e) => {
        e.preventDefault();
        this.props.addItemAction(this.props.dept, this.state.food, this.state.quantity);
    }

    setFood = (e) => {
        this.setState({
            food: e.target.value
        })
    }
   
    setQuantity = (e) => {
        this.setState({
            quantity: Number(e.target.value)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitItem}>
                    <input value={this.state.food} onChange={this.setFood} type='text' placeholder='FoodName' />
                    <input value={this.state.quantity} onChange={this.setQuantity} type='number' placeholder='0' />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addItemAction: addItemAction
    }, dispatch)
}

// export default AddItem;

export default connect(null, mapDispatchToProps)(AddItem);