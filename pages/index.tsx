import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Exhibit from '../components/Exhibit';
import { Container, Box, Flex, Spacer, VStack, Grid, GridItem } from "@chakra-ui/react"

export default function Home() {
  return (
    <React.Fragment>
      <Head>
          <title>Decaying Kinetograph</title>
          <meta name="description" content="Take A Gander, Quickly..." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Flex flexDirection="column" width="100%" h="100vh">
        <Box flex="1" bg="tomato">
          <Exhibit></Exhibit>
        </Box>
        <Box h="150px" bg="papayawhip">
          <Footer>
          </Footer>
        </Box>
      </Flex>
    </React.Fragment>
  )
}
