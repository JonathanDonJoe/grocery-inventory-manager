import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clearInventory from '../actions/clearInventory';
import resetInventory from '../actions/resetInventory';

class Main extends Component {

    render() { 

        const frozenQuantity = this.props.frozenData.reduce( (a, b) => a+b.quantity, 0)
        const dairyQuantity = this.props.dairyData.reduce( (a, b) => a+b.quantity, 0)
        const meatQuantity = this.props.meatData.reduce( (a, b) => a+b.quantity, 0)
        // console.log(frozenQuantity);
        const frozens = this.props.frozenData.map((item,i )=> <h3 key={item.food+i}>{item.quantity} {item.food}</h3>)
        const meat = this.props.meatData.map((item,i )=> <h3 key={item.food+i}>{item.quantity} {item.food}</h3>)
        const dairy = this.props.dairyData.map((item,i )=> <h3 key={item.food+i}>{item.quantity} {item.food}</h3>)

        return ( 
            <div>
                <h2>Total Frozen Items: {frozenQuantity}</h2>
                <h2>Total Meat Items: {meatQuantity}</h2>
                <h2>Total Dairy Items: {dairyQuantity}</h2>
                <hr/>
                {[...frozens, ...meat, ...dairy]}
                <button onClick={this.props.clearInventory}>Clear All Inventory</button>
                <button onClick={this.props.resetInventory}>Reset Inventory</button>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {
        frozenData: state.frozen,
        meatData: state.meat,
        dairyData: state.dairy
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        clearInventory: clearInventory,
        resetInventory: resetInventory
    }, dispatch)
}

// export default Main;

export default connect(mapStatetoProps, mapDispatchToProps) (Main)