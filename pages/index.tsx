import Head from 'next/head';
import { useReactMediaRecorder } from 'react-media-recorder';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Image from 'next/image';

declare const window: Window &
  typeof globalThis & {
    MediaRecorder: any;
  };

const recImage = <img src="/rec.png" alt="recimg" height={400} />;
const noRecImage = <img src="/notrec.png" alt="recimg" height={400} />;

export default function Home() {
  const {
    status,
    startRecording,
    stopRecording,
    resumeRecording,
    pauseRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true });

  const [isNowRecording, setIsNowRecording] = useState(false);

  function onStart() {
    startRecording();
    setIsNowRecording(true);
  }
  function onPause() {
    pauseRecording();
  }
  function onResume() {
    resumeRecording();
  }
  function onStop() {
    stopRecording();
    setIsNowRecording(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">RecTrans Web!</a>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <button onClick={onStart} className="m-1">
              Record
            </button>
            <button onClick={onPause} className="m-1">
              Pause
            </button>
            <button onClick={onResume} className="m-1">
              Resume
            </button>
            <button onClick={onStop} className="m-1">
              Stop
            </button>
          </div>

          <div className={styles.card}>
            <audio src={mediaBlobUrl ? mediaBlobUrl : ''} controls />
          </div>

          <div className={styles.card}>
            <p>{status}</p>
            <br />
            {isNowRecording ? recImage : noRecImage}
          </div>
        </div>
      </main>
    </div>
  );
}
