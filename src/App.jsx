import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Launches } from './Launches'

const client = new ApolloClient({
  uri: 'https://apollo-fullstack-tutorial.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <h1>Apollo Client Test</h1>
      <Launches />
    </ApolloProvider>
  )
}

export default App
