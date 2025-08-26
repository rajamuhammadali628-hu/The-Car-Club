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
        <div className={styles.blogcontentin}>
            <Image
            src="/BMW.jpg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
          <p>This is a blog. This blog is for information purpose. Click the button to see more blogs.</p>
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
          <p>This is a blog. This blog is for information purpose. Click the button to see more blogs.</p>
        </div>
        <br />
        <div className={styles.blogcontentin}>
            <Image
            src="/Lamborgini.jpg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
          <p>This is a blog. This blog is for information purpose. Click the button to see more blogs.</p>
        </div>
        <br />
        <div className={styles.blogcontentin}>
            <Image
            src="/Supra.jpg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
          <p>This is a blog. This blog is for information purpose. Click the button to see more blogs.</p>
        </div>
      </div>
      <br />
      <div className={styles.blogmaincontent}>
        <div className={styles.blogcontentin}>
            <Image
            src="/Shelby.png"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
          <p>This is a blog. This blog is for information purpose. Click the button to see more blogs.</p>
        </div>
        <br />
        <div className={styles.blogcontentin}>
            <Image
            src="/Bugatti.jpeg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
          <p>This is a blog. This blog is for information purpose. Click the button to see more blogs.</p>
        </div>
        <br />
        <div className={styles.blogcontentin}>
            <Image
            src="/G-wagon.webp"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
          <p>This is a blog. This blog is for information purpose. Click the button to see more blogs.</p>
        </div>
      </div>
    </>
  )
}

export default Blogs