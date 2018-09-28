import React,{ Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps,prevState) {
        return nextProps.hideModal !== this.props.hideModal || nextProps.children !== this.props.children;
    }
    render() {
        return <Aux>
                <BackDrop hideModal={this.props.hideModal} closeModal={this.props.closeModal}/>
                <div className={classes.Modal}
                    style={{
                        transform: this.props.hideModal ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.hideModal ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
    }
}

export default Modal;