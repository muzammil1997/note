import React from 'react';
import PropTypes from 'prop-types';
import history from '../history';

export default  (ComposedComponent) => {

    class Authenticate extends React.Component{

        componentDidMount(){
            if(!this.props.isAuthenticated){
                history.push('/');
            }
           
        }
        
        componentDidUpdate(prevProps, prevState, snapShot){
            if(!prevProps.isAuthenticated){
                console.log(this.props.isAuthenticated)
                 history.push('/');
             }
        }

        render(){
            return(
                <ComposedComponent {...this.props} />
            );
        }
    }

   Authenticate.propTpyes = {
       isAuthenticated: PropTypes.bool.isRequired
   };

   return Authenticate;

};