import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResetPassword from '../../components/ResetPassword'

class ResetPasswordContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    
    render () {
        return (
            <div className="reset-password-page">
                <ResetPassword />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetPasswordContainer);