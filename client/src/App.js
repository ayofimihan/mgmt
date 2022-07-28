import Header from "./components/Header";
import Clients from "./components/Clients";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Header />
        <Clients />
        Hello World
      </div>
    </ApolloProvider>
  );
}

export default App;
