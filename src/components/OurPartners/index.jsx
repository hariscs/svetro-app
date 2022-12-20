import { images } from '../../constants'

import styles from './styles.module.css'

const data = [
  { id: 1, img: images.wallmartp },
  { id: 2, img: images.amazonad },
  { id: 3, img: images.bigcom },
  { id: 4, img: images.wise },
  { id: 5, img: images.helium },
]

export function OurPartners() {
  return (
    <div className='container'>
      <h2 className={styles.partnersHeading}>Our Partners</h2>
      <div className={styles.flex}>
        {data.map((img) => (
          <div className={styles.imgContainer}>
            <img src={img.img} alt='...' />
          </div>
        ))}
      </div>
    </div>
  )
}
