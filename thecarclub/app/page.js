import styles from "../styles/page1.module.css";
import Image from 'next/image';
import Link from 'next/link'

export default function Home() {
  return (
    
    <div>
        <br />
        <br />
        <div className={styles.maincontainer}>
          <div className={styles.subcontainer}>
            <h1>The Car Club</h1>
            <Image
            src="/BMW.jpg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
            <h2>A blog for Car lovers</h2>
          </div>
        </div>  
        <br />
        <br />
        <div className={styles.blogarea}>
          <div className={styles.blogareain}>
            <h2>Top Blogs</h2>
            <br />
            <div className={styles.blogimage}>
                  <Image
                src="/BMW-logo.jpg"
                alt="Eyes of BMW"
                width={150}
                height={150}
                className={styles.heroImage1}
          />
             <Image
                src="/Supra.jpg"
                alt="Eyes of BMW"
                width={150}
                height={150}
                className={styles.heroImage1}
          />
            <Image
                src="/Dodge.jpg"
                alt="Eyes of BMW"
                width={150}
                height={150}
                className={styles.heroImage1}
          />
            </div>
            <br />
             <div className={styles.blogimage}>
                  <Image
                src="/G-wagon.webp"
                alt="Eyes of BMW"
                width={150}
                height={150}
                className={styles.heroImage1}
          />
             <Image
                src="/Bugatti.jpeg"
                alt="Eyes of BMW"
                width={150}
                height={150}
                className={styles.heroImage1}
          />
            <Image
                src="/Lamborgini.jpg"
                alt="Eyes of BMW"
                width={150}
                height={150}
                className={styles.heroImage1}
          />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className={styles.blogbtn}>
            <div className={styles.morebtn}>
              <div className={styles.btn}><Link href="/blogs">Click to see more blogs</Link></div>
            </div>
        </div>
        <br />
        <br />
    </div>   
  );
}

