// "use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import Link from "next/link";

// Amplify.configure(outputs);

// const client = generateClient<Schema>();

export default async function App() {
  const fetchData = await getData()

  return (
    <main>
      <h1>My todos</h1>
      <ul>
        <li>{fetchData.text}</li>
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
        <Link href="/test">
          <button>Go to test</button>
        </Link>
      </div>
    </main>
  );
}


async function getData() { 

  const data = await fetch('https://cat-fact.herokuapp.com/facts/random')
  const dataJson = await data.json()
  console.log(dataJson.text)
  return dataJson
}