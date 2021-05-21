/* eslint-disable module-resolver/use-alias */
import AppActions from '../../../actions/appActions';
import {manageComponentStats} from '../../../actions/componentStats';
import {getUsers} from '../../../actions/sampleActions';
import Constants from '../../../constants';
import React, {Component, lazy} from 'react';
import {Alert, StatusBar, StyleSheet, View, Text} from 'react-native';
import SignInComponent from '../../../components/Auth/SignIn';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {goHome} from '../../../config/navigation';



class SignIn extends Component {
  



  constructor(props) {
    super(props);
    this.state = {};

   
     const {navigation} = props;
    
  }

  componentDidMount() {

  }

  _onPressLogin = (email, password) => {
    console.log(email, password, 'email, password', getUsers);
    this.props.getUsers();

    this.props.navigation.reset({routes:[{name:'Tab'}]});
  //goHome()
   
  };

  

  render() {
      
    return (
      <View style={styles.container}>
       <SignInComponent onLogin={this._onPressLogin} /> 
      </View>
    );
  }
}


const mapStateToProps = ({authReducer}) => ({
  isLoggedIn: authReducer.isLoggedIn,
  isLoading: authReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  AppActions: bindActionCreators(AppActions, dispatch),
  //manageComponentStats: bindActionCreators(manageComponentStats, dispatch),
  getUsers: bindActionCreators(getUsers, dispatch),
});



export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.White,
  },
});
