import {Box, Flex, Spinner, Text} from "@chakra-ui/react"
import {useState, useEffect} from "react"


export default function Home() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000)
    }, [])

    return (
        <>
            {loading && <SplashSpinner/>}
            {!loading && <Navigation/>}
        </>
    )
}

function Navigation() {
    return ("Hi there")
}

function SplashSpinner() {
    return (
        <Box
            position="absolute"
            left="50%"
            top="50%"
        >
            <Flex
                direction="column"
                align="center"
                transform="translateX(-50%) translateY(-50%)"
            >
                <Spinner size="xl" speed="0.75s"/>
                <Text mt={4}>Loading lessons...</Text>
            </Flex>
        </Box>
    )
}
