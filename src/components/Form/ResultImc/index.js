import React from "react";
import { Share } from "react-native";
import {
    Box,
    ButtonShared,
    ImcContainer,
    ImcResult,
    Information,
    SharedText
} from "./style";

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: 'Meu imc hoje é:' + props.resultImc
        })
    }

    return (
        <ImcContainer>
            <Box>
                <Information>{props.messageResultImc}</Information>
                <ImcResult>{props.resultImc}</ImcResult>
                <Information>{props.responseImcUser}</Information>
                <ButtonShared
                    onPress={() => onShare()}
                >
                    <SharedText>Compartilhar</SharedText>
                </ButtonShared>
            </Box>
        </ImcContainer>
    );
}