import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import configureStore from '../store/configureStore'
import DevTools from './DevTools'
import {jQuery} from 'jquery/dist/jquery.min'
import 'semantic-ui/dist/semantic.min.css'
import 'semantic-ui/dist/semantic.min'
import '../../style/main.scss'
import '../../style/Home.scss'
import '../../style/Login.scss'
require('es6-promise').polyfill()


class App extends Component {
    render() {
        const {actions, dispatch} = this.props
        return (
            <div>
                {this.props.children}
                <DevTools />
            </div>
        )
    }
}


App.propTypes = {
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
)(App)
