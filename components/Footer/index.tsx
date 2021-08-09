import React from 'react';
import { RamenIcon } from '../Icons';
import { chakra, Box, Stack, ButtonGroup, IconButton } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

// Had a problem where if I used y-padding instead of y margin, flex does not take padding into calculations and page kept extending past browser window
export default function Footer(props: any) {
    return (
        <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" my="8" px={{ base: '4', md: '8' }}>
            <Stack>
                <Stack direction="row" spacing="4" align="center" justify="space-between">
                    <RamenIcon></RamenIcon>
                    <ButtonGroup variant="ghost" color="gray.600">
                        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
                        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
                        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
                    </ButtonGroup>
                </Stack>
                <Text fontSize="sm" alignSelf={{ base: 'center', sm: 'start' }}>
                    &copy; {new Date().getFullYear()} Ramen For Breakfast Inc. All rights reserved.
                </Text>
            </Stack>
        </Box>
    )
};
