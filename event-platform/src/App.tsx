import { Router } from "./componentes/Router"
import { ApolloProvider } from '@apollo/client'
import { Event } from "./pages/Event"
import {client} from './lib/apollo'
import { BrowserRouter } from "react-router-dom"

function App() {
 
  return (
      // <Event />
      <ApolloProvider client={client}>
        <BrowserRouter>
           <Router />
        </BrowserRouter>   
      </ ApolloProvider>
  )
}

export default App
