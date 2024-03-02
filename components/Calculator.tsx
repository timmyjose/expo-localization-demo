import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { i18n } from '../features/localisation'

const add = async (x: number, y: number): Promise<number> => {
    return x + y
}

const sub = async (x: number, y: number): Promise<number> => {
    return x - y
}

const mul = async (x: number, y: number): Promise<number> => {
    return x * y
}

const div = async (x: number, y: number): Promise<number> => {
    if (y == 0) {
        return 0.0
    }
    return x / y
}

export default function Calculator() {
    const [x, setX] = useState<number>(0.0)
    const [y, setY] = useState<number>(0.0)
    const [res, setRes] = useState<number>(0.0)

    const navigation = useNavigation()

    const handleAdd = async (x: number, y: number): Promise<void> => {
      const sum = await add(x, y)
      setRes(sum)
    }

    const handleSub = async (x: number, y: number): Promise<void> => {
      const diff = await sub(x, y)
      setRes(diff)
    }

    const handleMul = async (x: number, y: number): Promise<void> => {
      const prod = await mul(x, y)
      setRes(prod)
    }

    const handleDiv = async (x: number, y: number): Promise<void> => {
      const quot = await div(x, y)
      setRes(quot)
    }

    return (
        <View style={styles.container}>
            <Button title={i18n.t('navigation.back')} onPress={() => navigation.goBack()} />
            <TextInput
              style={styles.input}
              value={x?.toString()}
              onChangeText={text => setX(parseFloat(text))}
              placeholder={i18n.t('calculator.placeholderX')}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.input}
              value={y?.toString()}
              onChangeText={text => setY(parseFloat(text))}
              placeholder={i18n.t('calculator.placeholderY')}
              keyboardType='numeric'
            />
            <View style={styles.buttonContainer}>
              <Button title={i18n.t('calculator.add')} onPress={() => handleAdd(x, y)} />
              <Button title={i18n.t('calculator.sub')} onPress={() => handleSub(x, y)} />
              <Button title={i18n.t('calculator.mul')} onPress={() => handleMul(x, y)} />
              <Button title={i18n.t('calculator.div')} onPress={() => handleDiv(x, y)} />
            </View>
            <Text style={styles.resultText}>{res}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
    },
    button: {
      fontSize: 5
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    resultText: {
      fontSize: 20,
      marginBottom: 10
    }
})