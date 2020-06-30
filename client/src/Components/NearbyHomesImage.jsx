import React from 'react'
import NearbyHomesButton from './NearbyHomesButton.jsx'
import styles from '../Styles/HomesImage.css'

//component with mousehover image
const NearbyHomesImage = (props) => {
  return (
    <div className={styles.propertyMedia}>
      <div>
        <div>
        <a className={styles.filler} href='https://www.trulia.com/p/ca/palo-alto/569-maybell-ave-palo-alto-ca-94306--2472139085'>
        <img className={styles.propertyImage} src={props.image} alt="House"></img>
        </a>
        <NearbyHomesButton />
          <span className={styles.propertyTagContainer}>
            {props.new ? <span className={styles.tagText}> <span> New</span></span> : ''}
          </span>
        </div>
      </div>
    </div>
  )
}

export default NearbyHomesImage