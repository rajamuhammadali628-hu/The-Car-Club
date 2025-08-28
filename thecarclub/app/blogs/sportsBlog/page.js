import React from 'react'
import styles from "./sport.module.css";
import Image from "next/image"; 

const SportsBlog = () => {
  return (
    <>
      <br />
      <br />
      <div className={styles.welcomeSection}>
        <div className={styles.welcomesub}>
            <h1>Sport Cars Blog Section</h1>
            <h2>Here you can see the Information about the sport cars</h2>
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.BMWsection}>
          <div className={styles.BMWsubImage}>
              <Image
            src="/BMW-sports.jpg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
          </div>
          <div className={styles.BMWsubpara}>
            <p>The BMW M4 Sports represents the peak of automotive excellence, masterfully combining 
            high-performance engineering with elegant design. Powered by a 3.0-liter twin-turbocharged 
            inline-six engine generating 503 horsepower, it accelerates from 0 to 60 mph in just 3.8 seconds. 
            The vehicle features an aggressive exterior with its signature kidney grille and carbon-fiber roof, 
            complemented by precision-tuned adaptive suspension and available manual transmission for an engaging 
            driving experience. Inside, the M4 blends race-inspired sport seats with luxury amenities and advanced
             technology. This German-engineered masterpiece perfectly balances track-ready performance with 
             everyday practicality, making each drive a memorable experience.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SportsBlog