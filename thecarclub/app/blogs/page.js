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
      <div className={styles.blogmaincontent}>
      <div className={styles.blogarea}>
        <h1>Sports Section</h1>
          <div className={styles.blogmaincontentin}>
          <br />
          <div className={styles.blogcontentin}>
            <Image
            src="/BMW-sports.jpg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
          <p>BMW M5</p>
          <button className={styles.btn}>Click to see more</button>
        </div>
          <br />
          <div className={styles.blogcontentin}>
            <Image
            src="/Mustang.jpeg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
          <p>Mustang Cobra Dark Hourse</p>
          <button className={styles.btn}>Click to see more</button>
        </div>
      </div>
      </div>

      <div className={styles.blogarea}>
        <h1>Sports Section</h1>
          <div className={styles.blogmaincontentin}>
          <br />
          <div className={styles.blogcontentin}>
            <Image
            src="/Bugatti.jpeg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
          <p>Bugatti Chiron</p>
          <button className={styles.btn}>Click to see more</button>
        </div>
          <br />
          <div className={styles.blogcontentin}>
            <Image
            src="/Dodge.jpg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
          <p>Dodge Challenger</p>
          <button className={styles.btn}>Click to see more</button>
        </div>
      </div>
      </div>
      
     
    </div>
    </>
  )
}

export default Blogs