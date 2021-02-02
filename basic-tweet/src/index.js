import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"

const Tweet = ()=>{
  return(
    <ChakraProvider>
        <App/>
    </ChakraProvider>
  )
}
ReactDOM.render(
    <Tweet />,
  document.getElementById('root')
);

