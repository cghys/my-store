import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import HeaderComp from '../components/HeaderComp'

class HeaderContainer extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }


    render() {
        return (
            <div>
                <HeaderComp pathParam={this.props.pathParam}/>
            </div>
        )
    }
}

HeaderContainer.propTypes = {
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer)

