import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function App() {
  // Estado para el porcentaje de llenado del tanque
  const [porcentajeLlenado, setPorcentajeLlenado] = useState(50); // Valor inicial en 50%

  // Función para simular cambio en el porcentaje
  const aumentarPorcentaje = () => {
    if (porcentajeLlenado < 100) {
      setPorcentajeLlenado(porcentajeLlenado + 10);
    } else {
      Alert.alert("Tanque lleno", "El tanque ya está al 100%");
    }
  };

  const reducirPorcentaje = () => {
    if (porcentajeLlenado > 0) {
      setPorcentajeLlenado(porcentajeLlenado - 10);
    } else {
      Alert.alert("Tanque vacío", "El tanque ya está vacío");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/Logo.png')} // Ruta a la imagen
        style={styles.logo}
      />
      <Text style={styles.title}>Tanque de Agua</Text>
      <Text style={styles.percentageText}>{porcentajeLlenado}% lleno</Text>

      {/* Contenedor de la barra de progreso */}
      <View style={styles.progressBarContainer}>
        {/* Barra de fondo */}
        <View style={styles.progressBarBackground}>
          {/* Barra de llenado según porcentaje */}
          <View style={[styles.progressBarFill, { width: `${porcentajeLlenado}%` }]} />
        </View>
      </View>

      {/* Botones para ajustar el porcentaje */}
      <View style={styles.button1}>
        <Button
          title="Aumentar Llenado" 
          onPress={aumentarPorcentaje} 
        />
      </View>
        <Button
          title="Reducir Llenado" 
          onPress={reducirPorcentaje} 
          color="red"
        />
      
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  button1: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  percentageText: {
    fontSize: 18,
    marginBottom: 10,
  },
  // Contenedor de la barra de progreso
  progressBarContainer: {
    width: '80%',
    height: 40,
    marginBottom: 20,
  },
  // Fondo de la barra de progreso
  progressBarBackground: {
    height: '100%',
    backgroundColor: '#e0e0e0', // Color de fondo gris
    borderRadius: 15,
    overflow: 'hidden',
  },
  // Barra que representa el llenado
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00bfff', // Color celeste
    borderRadius: 10,
  },
});

