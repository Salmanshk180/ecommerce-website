import React from 'react'
import styles from './FooterInput.module.css'
const FooterInput = () => {
  return (
   <React.Fragment>
     <div className={styles.footer_col_1}>
              <p className={styles.col_title}>Get In Touch</p>
              <div>
                <input
                  type="text"
                  id={styles.footer_input}
                  placeholder="Your Email"
                />
                <button>Subscibe</button>
              </div>
              <p>Lorem ipsum dolor sit.</p>
            </div>
   </React.Fragment>
  )
}

export default FooterInput