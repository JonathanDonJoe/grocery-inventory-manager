import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ItemStock from './ItemStock';
import updateMeat from '../actions/meatInvUpdate';
import AddItem from './AddItem';

class MeatDept extends Component {

    changeQuantity = (operation, indexToChange) => {
        this.props.updateMeat(operation, indexToChange)
    }

    render() { 
        const meat = this.props.meatData.map((item, i)=> <ItemStock key={item.food + i} quantity={item.quantity} changeQuantity={this.changeQuantity} food={item.food} index={i} />)
        return ( 
            <div>
                <AddItem dept='Meat' />
                {meat}
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Takes 1 arg: state.  

    return {
        meatData: state.meat
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateMeat: updateMeat
    }, dispatch)
}

// export default MeatDept;
export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);