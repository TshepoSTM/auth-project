import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0252a8',
      lightPrimary:'#c2dfff',
      secondary: '#7189a3',
      warning:'#d9910d',
      danger:'#d90d0d',
      white:"#fff",
    },
    fontSize:{
      xLarge:30,
      large:22,
      medium:18,
      small:14,
      xSmall:10,
    },
};