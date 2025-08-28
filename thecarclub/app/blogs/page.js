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
        <div className={styles.blogImage} style={{backgroundImage: "url('BMW-sports.jpg')"}}>
          <button className={styles.btn}>Click to see</button>
        </div>
        <div className={styles.blogImage} style={{backgroundImage: "url('Supra1.jpg')"}}>
          <button className={styles.btn}>Click to see</button>
        </div>
        <div className={styles.blogImage} style={{backgroundImage: "url('Porsche.avif')"}}>
          <button className={styles.btn}>Click to see</button>
        </div>
    </div>
      <br />
      <div className={styles.blogmaincontent}>
        <div className={styles.blogImage} style={{backgroundImage: "url('Dodge.jpg')"}}>
          <button className={styles.btn}>Click to see</button>
        </div>
        <div className={styles.blogImage} style={{backgroundImage: "url('Gtr.jpeg')"}}>
          <button className={styles.btn}>Click to see</button>
        </div>
      </div>
      <br />
      <h3 className={styles.heading}>Luxary Cars</h3>
      <br />
      <br />
    <div className={styles.blogmaincontent}>
        
        <div className={styles.blogImage} style={{backgroundImage: "url('Bentley.jpg')"}}>
          <button className={styles.btn}>Click to see</button>
        </div>
        <div className={styles.blogImage} style={{backgroundImage: "url('RR.jpeg')"}}>
          <button className={styles.btn}>Click to see</button>
        </div>
        <div className={styles.blogImage} style={{backgroundImage: "url('G-wagon.webp')"}}>
          <button className={styles.btn}>Click to see</button>
        </div>
    </div>
      <br />
      <div className={styles.blogmaincontent}>
        <div className={styles.blogImage} style={{backgroundImage: "url('RangeRover.jpeg')"}}>
          <button className={styles.btn}>Click to see</button>
        </div>
        <div className={styles.blogImage} style={{backgroundImage: "url('Volvo.webp')"}}>
          <button className={styles.btn}>Click to see</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default Blogs