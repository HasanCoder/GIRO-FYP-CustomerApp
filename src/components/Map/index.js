import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const Map = ({ location }) => {
  const latlong = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  console.log(location);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={
          location
            ? { ...location, latitudeDelta: 0.015, longitudeDelta: 0.0121 }
            : latlong
        }
        showsUserLocation={true}
        showsMyLocationButton={true}>
        {/* {location&&<Marker coordinate={location} image></Marker>} */}
        <Marker
          coordinate={location ? location : latlong}
          pinColor={'black'}
          draggable
        />
      </MapView>
    </View>
  );
};

export default Map;
