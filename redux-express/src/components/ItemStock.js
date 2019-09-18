import React, { Component } from 'react';

class ItemStock extends Component {



    render() { 
        return (
            <div>
                <h3>{this.props.quantity} {this.props.food}</h3>
                <input className='add-button' type='button' onClick={() => {this.props.changeQuantity('+', this.props.index)}} value='+' />
                <input className='add-button' type='button' onClick={() => {this.props.changeQuantity('-', this.props.index)}} value='-' />
            </div>
        );
    }
}
 
export default ItemStock;