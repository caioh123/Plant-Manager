import React, { useState } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface EnviromentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean
}

export function EnviromentButton({title, active = false, ...rest} : EnviromentButtonProps){


    return (
        <RectButton
        style={[styles.container, active && styles.containerActive]}
        {...rest}
        >
            <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.heading,
        fontFamily: fonts.text,
    },
    containerActive: {

        backgroundColor: colors.green_light
    },
    container: {
        height: 40,
        width: 76,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.shape,
        borderRadius: 12,
        marginRight: 5,
        marginLeft: 10
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.green_dark,
    }
})

