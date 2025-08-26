import styles from "./page2.module.css";
import Image from 'next/image';

export default function About(){
  return (
    <>
      <br />
      <br />
      <div className={styles.aboutmaincontainer}>
        <div className={styles.aboutsubcontainer}>
          <h1>Welcome to The Car Club</h1>
          <h2>Your Source for Automotive Information</h2>
        </div>
      </div>  
      <br />
      <br />
      <div className={styles.aboutinfo1}>
        <h2>About The Car Club</h2>
        <br />
        <p>The Car Club is an online resource dedicated to providing clear, accurate, and comprehensive
          information about automobiles. We serve as a central hub for car enthusiasts, researchers
          , and potential buyers who seek detailed data and factual insights on a wide range of vehicles.</p>
        <br /> 
        <h2>Our Purpose</h2>
        <br /> 
        <p>Our purpose is to inform. We focus on delivering objective information, from technical
          specifications and performance data to features and safety ratings. We aim to be a reliable 
          source for anyone looking to research and understand cars without unnecessary fluff or bias.</p>  
        <br /> 
        <h2>Our Content</h2>
        <br />
        <p>All content on The Car Club is curated and presented with a focus on facts and clarity. You will find:</p>
        <ul>
          <li><b>Technical Specifications:</b> Detailed data on engine output, dimensions, fuel economy, and towing capacity.</li>
          <li><b>Feature Overviews:</b> Comprehensive lists of standard and optional features for various trim levels.</li>
          <li><b>Performance Data:</b> Factual information on acceleration, braking, handling, and off-road capabilities.</li>
        </ul>
        <br />      
        <h2>How to Use This Site</h2>
        <br />
        <p>This website is designed to help you efficiently find the information you need. Use the search 
          function or navigation menu to locate content by make, model, or vehicle type. We structure our 
          articles to allow for easy scanning of facts and figures..</p>   
        </div>
        <br />       
        <br />
        <div className={styles.aboutend}>
          <p>Thank you for using The Car Club as your automotive information resource.</p>
        </div>
    </>
  );
}