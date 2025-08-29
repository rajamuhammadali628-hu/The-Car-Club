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
      <br />
      <br />
        <div className={styles.infosection}>
              <Image
            src="/BMW-sports.jpg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
            <p><span className={styles.headings}>BMW M4 Sports</span><br />The BMW M4 Sports represents the peak of automotive excellence, masterfully combining 
            high-performance engineering with elegant design. Powered by a 3.0-liter twin-turbocharged 
            inline-six engine generating 503 horsepower, it accelerates from 0 to 60 mph in just 3.8 seconds. 
            The vehicle features an aggressive exterior with its signature kidney grille and carbon-fiber roof, 
            complemented by precision-tuned adaptive suspension and available manual transmission for an engaging 
            driving experience. Inside, the M4 blends race-inspired sport seats with luxury amenities and advanced
             technology. This German-engineered masterpiece perfectly balances track-ready performance with 
             everyday practicality, making each drive a memorable experience.</p>
        </div>
        <br />
      <br />
        <div className={styles.infosection}>
            <p><span className={styles.headings}>Toyota Supra MK4</span><br />The Toyota Supra MK4, officially the 
            fourth-generation (A80) Supra produced from 1993 to 2002, is an automotive icon revered for its 
            engineering brilliance and legendary performance. Its heart and claim to fame was the formidable
             2JZ-GTE engine, a 3.0-liter twin-turbocharged inline-six masterpiece celebrated for its immense 
             strength and staggering potential for power with minimal modifications. Cloaked in a timeless, 
             aerodynamic body and featuring a technologically advanced interior for its era, the Supra was a 
             true grand tourer. However, its near-mythical status was cemented by its dominant presence in 
             motorsports and its starring role in the The Fast and the Furious film franchise, transforming it 
             from a high-performance Japanese sports car into a global phenomenon and a highly sought-after 
             collector's item that continues to captivate enthusiasts worldwide.</p>
                 <Image
            src="/Supra1.jpg"
            alt="Eyes of BMW"
            width={300}
            height={150}
            className={styles.heroImage}
          />
        </div>
    </>
  )
}

export default SportsBlog