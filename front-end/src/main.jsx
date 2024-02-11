import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import { Grid, GridItem } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import Header from "./components/header";


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
        <Center bg="#FFFFFF">
          <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={"80px 300px"}
            gridTemplateColumns={"800px 200px "}
            gap="5"
            color="blackAlpha.700"
            fontWeight="bold"
            pr="2"
          >
            <GridItem pl="2" area={"header"}>
              <Header />
            </GridItem>
            
          </Grid>
        </Center>
    </ChakraProvider>
  </React.StrictMode>
)
