import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        primary: {
            normal: "#ed1c24",
            hover: "#a32126"
        }
    },

    fonts: {
        heading: 'Inter',
        body: 'Inter'
    },

    // styles: {
    //     global: {
    //         body: {
    //             bg: 'gray.900',
    //             color: 'gray.50'
    //         }
    //     }
    // }
})