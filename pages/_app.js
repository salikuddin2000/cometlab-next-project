import Head from "next/head";
import Box from "@mui/material/Box";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import { NavBar } from "../components/NavBar";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});


export default App;

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cometlabs clone for turing test</title>
      </Head>
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <Box
          style={{
            marginTop: "50px",
            backgroundColor: "#fcfcfc",
            width: "inherit",
            height: "100vh",
          }}
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <div className="container pt-4 pb-4">
            <ApolloProvider client={client}>
              <rocketAPIProvider>
                <Component {...pageProps} />
              </rocketAPIProvider>
            </ApolloProvider>
          </div>
        </Box>
      </Box>
    </>
  );
}
