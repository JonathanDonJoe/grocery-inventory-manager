import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ItemStock from './ItemStock';
import updateDairy from '../actions/dairyInvUpdate'
import AddItem from './AddItem';
import getInv from '../actions/getInv'

class DairyDept extends Component {

    componentDidMount() {
        this.props.getInv('dairy');
    }

    changeQuantity = (operation, indexToChange) => {
        this.props.updateDairy(operation, indexToChange)
    }

    render() { 
        const dairy = this.props.dairyData.map((item, i)=> <ItemStock key={item.food + i} quantity={item.quantity} food={item.food} changeQuantity = {this.changeQuantity} index={i} />)
        return ( 
            <div>
                <AddItem dept='Dairy' />
                {dairy}
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        dairyData: state.dairy
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateDairy: updateDairy,
        getInv: getInv
    }, dispatch)
}

// export default DairyDept;
export default connect(mapStateToProps, mapDispatchToProps)(DairyDept)