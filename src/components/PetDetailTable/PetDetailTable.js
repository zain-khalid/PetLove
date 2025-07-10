import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

const PetDetailTable = ({ details = [] }) => {

  return (
    <View >
        {
            details.map((detail, index) => {
                return (
                    <View key={index} style={[styles.row, index % 2 !== 0 && styles.altRow]}>
                        <Text style={styles.label}>{detail.label}</Text>
                        <Text style={styles.value}>{detail.value}</Text>
                    </View>
                )
            })
        }
    </View>
  );
};

export default PetDetailTable;