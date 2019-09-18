import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ItemStock from './ItemStock';
import updateFrozen from '../actions/frozenInvUpdate';
import AddItem from './AddItem';

class FrozenDept extends Component {

    changeQuantity = (operation, indexToChange) => {
        this.props.updateFrozen(operation, indexToChange)
    }

    componentDidMount() {
        // this.props.updateFrozen([])
    }

    render() { 
        // this.props.updateFrozen([{}]);
        const frozen = this.props.frozenData.map((item, i)=> <ItemStock key={item.food + i} quantity={item.quantity} food={item.food} changeQuantity={this.changeQuantity} index={i}/>)
        return ( 
            <div>
                <AddItem dept='Frozen' />
                {frozen}
            </div>        
        );
    }
}

function mapStateToProps(state) {
    return {
        frozenData: state.frozen
    }
}

// How we connect our component using this action creator to the dispatch
function mapDispatchToProps(dispatch) {
    // bindActionCreators changes updateFrozen from a function to an action creator
    // An action creator is a function that returns an action
    // Action has at least one property: type
    // The dispatch will send that object to every reducer
    return bindActionCreators({
        updateFrozen: updateFrozen
    }, dispatch)
}

// export default FrozenDept;
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);