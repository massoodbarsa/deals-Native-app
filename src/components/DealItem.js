//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { priceDisplay } from '../util';

// create a component
class DealItem extends Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired
    }

    handlePress = () => {
        this.props.onPress(this.props.deal.key)
    }
    render() {
        const { deal } = this.props
        return (
            <TouchableOpacity
                style={styles.deal}
                onPress={this.handlePress}
            >
                <Image source={{ uri: this.props.deal.media[0] }}
                    style={styles.image}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{deal.title} </Text >
                    <View style={styles.footer}>
                        <Text style={styles.cause}>{deal.cause.name} </Text >
                        <Text style={styles.price}>{priceDisplay(deal.price)} </Text >
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    deal: {
        marginHorizontal: 12,
        marginTop: 10
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
    },
    info: {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#bbb',
        borderWidth: 1,
        borderTopWidth: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    footer: {
        flexDirection: 'row'
    },
    cause: {
        flex: 2
    },
    price: {
        flex: 1,
        textAlign: 'right'
    },
});

//make this component available to the app
export default DealItem;