import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, PetDetailTable, VerticalSpacing } from '../../../components';
import MainTheme from '../../../constants/MainTheme';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ARROW_LEFT_ICON } from '../../../assets/icons';

const MockPaymentScreen = ({ route }) => {

  const { item } = route.params;

  const details = [
    { label: 'Name', value: item.name },
    { label: 'Type', value: item.type },
    { label: 'Age', value: item.age },
    { label: 'Gender', value: item.gender },
    { label: 'Breed', value: item.breed },
    { label: 'Color', value: item.colorName },
    { label: 'Location', value: item.location },
    { label: 'Description', value: item.description },
  ];
  
  const { popToTop, goBack } = useNavigation();

  const { top, bottom } = useSafeAreaInsets();

  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('card');

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", `You've adopted ${item.name}!`);
      popToTop();
    }, 2000);
  };

  return (
    <ScrollView style={[styles.container, { paddingTop: top, paddingBottom: bottom || MainTheme.constants.spacing }]} contentContainerStyle>
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />
        <TouchableOpacity onPress={goBack} style={styles.goBackContainer}>
          <Image source={ARROW_LEFT_ICON} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <PetDetailTable details={details} />

      <VerticalSpacing />
      <Text style={styles.sectionTitle}>Payment Method</Text>
      <VerticalSpacing />
      <View style={styles.paymentOptions}>
        {
          ['card', 'paypal'].map((method) => {
            return (
              <TouchableOpacity key={method} style={[styles.methodButton, selectedMethod === method && styles.activeMethod]} onPress={()=>setSelectedMethod(method)} >
                <Text style={[styles.methodText, selectedMethod === method && styles.activeMethodText]}>
                  {method === 'card' ? 'Credit/Debit Card' : 'PayPal'}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <VerticalSpacing />
      <Button loading={loading} title={"Pay & Adopt"} onPress={handlePayment} />
      <VerticalSpacing height={bottom + MainTheme.constants.spacing} />
    </ScrollView>
  );
};

export default MockPaymentScreen;