import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { getLocaleData, i18n } from '../features/localisation'

export default function LocalizationShowcase() {
  const navigation = useNavigation()
  
  const { languageCode, currencySymbol } = getLocaleData()

  return (
    <View style={styles.container}>
      <Button title={i18n.t('navigation.back')} onPress={() => navigation.goBack()} />
      <Text>{i18n.t('localeData.currentLanguage')}: {languageCode}</Text>
      <Text>{i18n.t('localeData.currentCurrencySymbol')}: {currencySymbol}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})