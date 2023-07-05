import { styled } from "styled-components/native";

export const FormContainer = styled.View`
    background-color: ${props => props.theme.background};
    align-items: center;
    border-top-left-radius: 30;
    border-top-right-radius: 30;
    padding-top: 30;
    flex: 1;
`

export const FormContent = styled.Pressable`
    width: 100%;
    padding-top: 20;
`

export const FormLabel = styled.Text`
    color: ${props => props.theme.color};
    font-size: 18;
    padding-left: 20;
    font-weight: bold;
`

export const InputText = styled.TextInput`
    width: 90%;
    border-radius: 50px;
    background-color:#f6f6f6;
    height: 40px;
    margin: 12px;
    padding-left: 10px;
`

export const ButtonCalculator = styled.TouchableOpacity`
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: #ff0043;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-left: 12px;
    margin-top: 30px;
`

export const TextButtonCalculator = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`

export const ErrorMessage = styled.Text`
    font-size: 12px;
    color: red;
    font-weight: bold;
    padding-left: 20px;
`

export const ResultImcContent = styled.View`
    width: 100%;
    height: 50%;
`

export const ResultImcItem = styled.View`
    width: 100%;
    height: 50%;
`
