import React from 'react'
import styles from './index.module.css'

const Home = () => {
    return (
        <div className={styles.container}>

            <div className={styles.hero}>
                <div className={styles.mainContainer}>
                    <div className={styles.text_container}>
                        <h3>I'm</h3>
                        <h1 className={styles.animated_text}>Ryan Taylor</h1>
                        <div>Web Designer, Web Developer, Front End Developer</div>
                    </div>
                    <div className={styles.profile}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;