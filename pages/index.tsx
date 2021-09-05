import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import * as AWS from "@aws-sdk/client-transcribe";


import { TranscribeClient, CreateCallAnalyticsCategoryCommand } from "@aws-sdk/client-transcribe";

// const client = new Transcribe({ region: "ap-northeast-1" });
const client = new TranscribeClient({ region: "ap-northeast-1" });

// const transcribeservice = new AWS.TranscribeService();

const params = {
  /** input parameters */
};

const command = new CreateCallAnalyticsCategoryCommand(params);


export default function Home() {
  return (
   <>
   <button  onClick={() => {
     // async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
     
     
     }}>ぼたーん</button>
   </>
  )
}
