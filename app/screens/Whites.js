import React from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';
import { connect } from 'react-redux';

export default class Whites extends React.Component {

    componentDidMount() {
         console.log('get cart')
     } 

 render(){

     console.log(this.props)

    return (
            <View>
                <Text>Classic Whites</Text>
            </View>
        );
    }
}

// const mapStateToProps = state=>{
//     return {
//         carData : state.cart
//     }
// }
// export default connect(mapStateToProps)(cart);


// const style = StyleSheet.create({
    
// });