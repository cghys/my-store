import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import HeaderComp from '../components/HeaderComp'


class CityplayContainer extends Component {
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
        const {paramsBasket, actions, dispatch} = this.props
        var childrenWrapper = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(
                child,
                {
                    paramsBasket,
                    actions,
                    dispatch
                })
        })

        return (
            <div>
                <HeaderComp pathParam={this.props.location.pathname} paramsBasket={paramsBasket} actions={actions} dispatch={dispatch}/>
                {childrenWrapper}
            </div>
        )
    }
}

CityplayContainer.propTypes = {
}

function mapStateToProps(state) {
    return {
        paramsBasket: {
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {},
            dispatch
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityplayContainer)

