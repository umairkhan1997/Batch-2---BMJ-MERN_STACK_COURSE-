import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Camera = () => {
    const [images, setImages] = useState([]);
    const onLaunchCamera = () => {
        launchCamera({
            mediaType: 'photo',
            cameraType: 'front'
        })
            .then((res) => {
                setImages(res.assets)
            })
            .catch((error) => { console.log(error) })
    }

    const onLaunchImageLibrary = () => {
        launchImageLibrary({
            mediaType: 'mixed',
        })
            .then((res) => {
                if(res.assets) {
                    setImages(res.assets)
                }
            })
            .catch((error) => { console.log(error) })
    }


    return (
        <View>
            <Text>Camera</Text>
            <Button title='Launch Camera' onPress={onLaunchCamera} />
            <Button title='Launch Image Library' onPress={onLaunchImageLibrary} />
            {images.map((image, index) => {
                console.log(image)
                return (
                    <Image
                key={index}
                source={{ uri: image.uri }}
                style={{width: 300, height: 300}}
            />
                )
            })}
        </View>
    )
}
export default Camera;