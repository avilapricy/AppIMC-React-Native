import React, { useState } from "react";
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from "react-native";
import ResultImc from "./ResultImc";
import {
    FormContainer,
    FormContent,
    FormLabel,
    InputText,
    ButtonCalculator,
    TextButtonCalculator,
    ErrorMessage,
    ResultImcContent
} from "./style";

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');
    const [errorMessage, setErrorMessage] = useState(null);
    const [textResult, setTextResult] = useState('')

    function imcCalculator() {
        let heightFormat = height.replace(',', '.');
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
        setImc(totalImc);

        if (totalImc < 18.5) {
            setTextResult('Abaixo do peso ideal.')
        } else if (totalImc >= 18.5 && totalImc < 25) {
            setTextResult('Peso ideal.')
        } else if (totalImc >= 25 && totalImc < 30) {
            setTextResult('Sobrepeso.')
        } else {
            setTextResult('Obesidade.')
        }

    }

    function varificationImc() {
        if (imc == null) {
            setErrorMessage('*Campo obrigatório')
            Vibration.vibrate();
        }
    }

    function verificationResultImc() {
        if (imc < 18.5) {
            mensagem = 'Abaixo do peso ideal.';
        } else if (imc >= 18.5 && imc < 25) {
            mensagem = 'Peso ideal.';
        } else if (imc >= 25 && imc < 30) {
            mensagem = 'Sobrepeso.';
        } else {
            mensagem = 'Obesidade.';
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu imc é igual:')
            setTextButton('Calcular novamente')
            setErrorMessage(null)
        } else {
            setImc(null)
            setTextButton('Calcular')
            setMessageImc('Preencha o Peso e altura')
            varificationImc()
        }
    }


    return (
        <FormContainer>
            {imc == null ?
                <FormContent onPress={Keyboard.dismiss}>
                    <FormLabel>Altura</FormLabel>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <InputText
                        placeholder="Ex. 1.72"
                        keyboardType="numeric"
                        onChangeText={setHeight}
                        value={height}
                    />

                    <FormLabel>Peso</FormLabel>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <InputText
                        placeholder="Ex. 75.36"
                        keyboardType="numeric"
                        onChangeText={setWeight}
                        value={weight}
                    />
                    <ButtonCalculator
                        onPress={() => validationImc()}
                    >
                        <TextButtonCalculator>{textButton}</TextButtonCalculator>
                    </ButtonCalculator>
                </FormContent >
                :
                <ResultImcContent>
                    <ResultImc
                        messageResultImc={messageImc}
                        resultImc={imc}
                        responseImcUser={textResult}
                    />
                    <ButtonCalculator
                        onPress={() => validationImc()}
                    >
                        <TextButtonCalculator>{textButton}</TextButtonCalculator>
                    </ButtonCalculator>
                </ResultImcContent>
            }
        </FormContainer>
    );
}