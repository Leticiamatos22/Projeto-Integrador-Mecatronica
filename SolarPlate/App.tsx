import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ToggleSwitch from './Components/ToggleSwitch/toggleSwitch';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Home Page</Text>
      </View>

      {/* Nova View para a imagem */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/LineChart.png')}
          style={styles.image}
        />
      </View>

      {/* Nova View para o texto abaixo da imagem */}
      <View style={styles.textBelowImageContainer}>
        <Text style={styles.textBelowImage}>Tensão da Placa: 124 W/h</Text>
      </View>

      {/* Adicione três retângulos abaixo da imagem */}
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangle}>
          <Text style={styles.rectangleText}>Posicionamento da Placa</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.rectangleText}>Angulo da Placa: 40°</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.rectangleText}>Sensor Tensão</Text>
        </View>
      </View>

      <ToggleSwitch />

      {/* Adicione o restante do conteúdo abaixo dos retângulos se necessário */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    alignItems: 'center',
    display: 'flex',

  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 10,
  },
  image: {
    width: 310,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textBelowImageContainer: {
    marginTop: 10,
  },
  textBelowImage: {
    fontSize: 18,
    color: 'black',
  },
  rectangleContainer: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'space-between',
    width: 300,
    marginTop: 70,
  },
  rectangle: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleText: {
    color: 'black',
  },
});
