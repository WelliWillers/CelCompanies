import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181B23",
            "800": "#1f2029",
            "700": "#353646",
            "600": "#4b4d63",
            "500": "#616480",
            "400": "#797d9a",
            "300": "#9699b0",
            "200": "#b3b5c6",
            "100": "#d1d2dc",
            "50": "#eeeef2"
        },
        primary: {
            normal: "#ed1c24",
            hover: "#a32126"
        },
        secondary: "#2596a4",
        white: "#fff",
        black: "#000",
        red: "#D90000"
    },

    fonts: {
        heading: 'Inter',
        body: 'Inter'
    },

    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})