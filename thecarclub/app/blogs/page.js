import React from 'react'
import styles from "./page3.module.css";
import Image from 'next/image';

const  Blogs= () => {
  return (
    <>
      <br />
      <br />
      <div className={styles.blogcontent}>
        <div className={styles.blogsubcontent}>
          <h1>Welcome to the Blogs Area</h1>
          <h2>Here you can see information about the blogs.</h2>
        </div>
      </div>
      <br />
      <h3 className={styles.heading}>Sports Cars</h3>
      <br />
      <br />
      <div className={styles.blogmaincontent}>
        <div className={styles.blogImage1}></div>
        <div className={styles.blogImage2}></div>
    </div>
      <br />
      <div className={styles.blogmaincontent}>
        <div className={styles.blogImage3}></div>
        <div className={styles.blogImage4}></div>
      </div>
      <br />
      <h3 className={styles.heading}>Luxary Cars</h3>
      <br />
      <br />
    <div className={styles.blogmaincontent}>
        <div className={styles.blogImage5}></div>
        <div className={styles.blogImage6}></div>
    </div>
      <br />
      <div className={styles.blogmaincontent}>
        <div className={styles.blogImage7}></div>
        <div className={styles.blogImage8}></div>
      </div>
      <br />
    </>
  )
}

export default Blogs