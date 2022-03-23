import React from "react";
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const window = Dimensions.get('window');
const Map = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
            >
            </MapView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: window.height,
        width:  window.width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default Map;