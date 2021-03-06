import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorhandler = ( WrappedComponent,axios ) => {
    return class extends Component {
        state = {
            error:null
        }
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            })
            this.respInterceptor = axios.interceptors.response.use(res=>res,error => {
                this.setState({error:error});
            })
            this.setState({error:null});
        }

        componentWillUnMount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.respInterceptor);
        }

        closeErrorModalHandler = () => {
            this.setState({error:null});
        }

        render() {
            return (
                <Aux>
                    <Modal hideModal={this.state.error} closeModal={this.closeErrorModalHandler}>
                        {this.state.error !== null?this.state.error.message:null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>    
            )
        }
    } 
};

export default withErrorhandler;