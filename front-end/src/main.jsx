import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header'
import HomeBody from './components/home_body'


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <HomeBody />
    </ChakraProvider>
  </React.StrictMode>,
)
