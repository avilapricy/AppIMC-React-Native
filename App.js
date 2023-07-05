import { StyleSheet, View, useColorScheme } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form'
import themes from './src/components/themes'
import { ThemeProvider, styled } from 'styled-components/native';

export default function App() {
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || theme.dark

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title />
        <Form />
      </Container>
    </ThemeProvider>

  );
}

const Container = styled.View`
    flex: 1;
    background-color: #e0e6e6;
    padding-top: 80px;
`
