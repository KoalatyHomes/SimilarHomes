import React from 'react'
import styles from '../Styles/HomesArrow.css'

const SimilarHomesPrevious = (props) => {
  return (
    <div className={styles.previousSlider}>
      <button onClick={props.previous} type="button" className={styles.sliderController}>
        <div className={styles.SVGContainer}>
          <svg className={styles.svg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path  d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" fill="#869099"></path>
          </svg>
        </div>
      </button>
    </div>
  )
}
export default SimilarHomesPrevious