import "../flow/config";

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FCL Quickstart with NextJS</title>
        <meta name="description" content="My first web3 app on Flow!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <h1>Welcome to My Price compare Website!</h1>
        <div>
          <label>Search your product here</label>
          <input></input>
          <button>Search</button>
          <div>
            <h1>Amazon :-</h1>
          </div>
          <div>
            <h1>Flipkart :-</h1>
          </div>
          <div>
            <h1>Ebay :-</h1>
          </div>
        </div>
      </body>
    </div>
  );
}
