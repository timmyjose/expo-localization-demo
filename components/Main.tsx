import { useNavigation } from "@react-navigation/native"
import { Button, StyleSheet, View } from "react-native"
import { i18n } from "../features/localisation"

export default function Main() {
    const navigation = useNavigation()

    return (
        <View>
            <Button title={i18n.t('navigation.calculator')} onPress={() => navigation.navigate('Calculator') } />
            <Button title={i18n.t('navigation.localizationShowcase')} onPress={() => navigation.navigate('LocalizationShowcase')} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
