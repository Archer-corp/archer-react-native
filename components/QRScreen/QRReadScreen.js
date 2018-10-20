'use strict';
import React from 'react';
import { StyleSheet, StatusBar, Image, View, Alert, LayoutAnimation, TouchableOpacity, Linking } from 'react-native';
import firebase from 'firebase';
import { createBottomTabNavigator } from 'react-navigation';
import { Container, Text, Header, Body, Input, Content } from 'native-base';
import { BarCodeScanner, Permissions } from 'expo';
//import QRCodeScanner from 'react-native-qrcode-scanner';

class QRReadScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            lastScannedUrl: null,
        };
    }
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }
    _handleBarCodeRead = result => {
        if (result.data !== this.state.lastScannedUrl) {
            LayoutAnimation.spring();
            console.log(result.data)
            this.setState({ lastScannedUrl: result.data });
        }
    };

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <View style={styles.container}>
                <BarCodeScanner
                    onBarCodeRead={this._handleBarCodeRead.bind(this)}
                    style={StyleSheet.absoluteFill}
                />
                {this._maybeRenderUrl()}
            </View>
        );
    }
    handleBarCodeScanned = ({ type, data }) => {
        alert('Bar code with type ${type} and data ${data} has been scanned!');
    }
    _handlePressUrl = () => {
        Alert.alert(
            'Open this URL?',
            this.state.lastScannedUrl,
            [
                {
                    text: 'Yes',
                    onPress: () => Linking.openURL(this.state.lastScannedUrl),
                },
                { text: 'No', onPress: () => { } },
            ],
            { cancellable: false }
        );
    };

    _handlePressCancel = () => {
        this.setState({ lastScannedUrl: null });
    };

    _maybeRenderUrl = () => {
        if (!this.state.lastScannedUrl) {
            return;
        }

        return (
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
                    <Text numberOfLines={1} style={styles.urlText}>
                        {this.state.lastScannedUrl}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={this._handlePressCancel}>
                    <Text style={styles.cancelButtonText}>
                        Cancel
          </Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 15,
        flexDirection: 'row',
    },
    url: {
        flex: 1,
    },
    urlText: {
        color: '#fff',
        fontSize: 20,
    },
    cancelButton: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
    },
});

export default (QRReadScreen);