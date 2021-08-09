import React from 'react';
import { Center, Image, Box, Grid } from "@chakra-ui/react"
// So if I am to build my own proxy URL service, since I need give people a URL that is not the URL accessing the actual asset. 
// Then I need to ensure that that URL expires after one request. 

export default function Exhibit (props: any) {
    return (
        <Center>
            <Image src="/kinetophone.jpeg" fallbackSrc="https://via.placeholder.com/400" fit="scale-down" height="400px"/>
        </Center>
    )
};