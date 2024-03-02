import * as Localization from 'expo-localization'
import { I18n } from 'i18n-js'

export const translations = {
    en: { 
        localeData:{
          currentLanguage: 'Current language',
          currentCurrencySymbol: 'Current currency symbol'
        },
        navigation: {
          back: 'Back',
          calculator: 'Calculator',
          localizationShowcase: 'Localization Showcase'
        },
        calculator: {
          placeholderX: 'First number',
          placeholderY: 'Second number',
          add: 'Add',
          sub: 'Subtract',
          mul: 'Multiply',
          div: 'Divide'
    }},
    ru: {
        localeData:{
          currentLanguage: 'Текущий язык',
          currentCurrencySymbol: 'Текущий символ валюты'
        },
        navigation: {
          back: 'Назад',
          calculator: 'Калькулятор',
          localizationShowcase: 'Демонстрация локализации'
        },
        calculator: {
          placeholderX: 'Первый номер',
          placeholderY: 'Второй номер',
          add: 'Добавлять',
          sub: 'Вычесть',
          mul: 'Умножить',
          div: 'Разделять'
        }
    }
}

export const i18n = new I18n(translations)
i18n.locale = Localization.getLocales()[0].languageCode ?? 'en'

interface LocaleData {
    languageCode: string | null;
    currencySymbol: string | null;
}

export const getLocaleData = (): LocaleData => {
    const {languageCode, currencySymbol} = Localization.getLocales()[0]
    return {
        languageCode, currencySymbol
    }
}