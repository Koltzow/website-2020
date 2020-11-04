import React from 'react'

import styles from './about.module.css'

const About = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <h1 className={styles.title}>About</h1>
        <h2>I currently work as Creative Director @ TRY Apt here in lovely Oslo, Norway.</h2>
        <p>I’ve been drawing my whole life, all {currentYear - 1988} year of them. I started doing design and development at the age of 15 and have been doing so ever since. I have 2 years of entrepeneural background and {currentYear - 2011}+ years of professional experience.</p>
        <p>I love solving problems, coming up with creative strategies and cutting edge digital solutions. I also love getting my hands dirty if I need to. I’m good by myself, but better in teams and my philosophy is “make something worth making”.</p>
        <p>I have worked with some of the biggest clients in Norway and abroad, including RCCL, Volkswagen, Toyota, Oslo kommune, Tine, DNB, Equinor, Norsk Tipping, VG, Orkla and many more.</p>
        <p>I’ve been fortunate to work with a bunch of talented people and create some amazing websites. So amazing they won some awards. Roughly ~100 of them, but who’s counting.</p>
        <h2>Wanna get in touch?</h2>
        <p>
          <a href={`mailto:christopherk88@gmail.com`}>Send me an email</a>
        </p>
      </div>
      <div className={styles.content}>
        Content here!!!
      </div>
    </div>
  )
}

export default About
