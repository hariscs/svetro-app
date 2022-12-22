import styles from './styles.module.css'
export function AsSeenOn() {
  return (
    <div>
      <p className={styles.title}>Featured On</p>
      <div className={styles.logoContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logos}>
            <img
              src='https://svgur.com/i/eCr.svg'
              style={{ marginRight: '14' }}
              alt='Featured on FOX News'
              className='news-logo'
            />{' '}
            <img
              src='https://i.imgur.com/qgfZn5U.png'
              style={{ maxWidth: '110' }}
              alt='Featured on USA Today'
              className='news-logo'
            />{' '}
            <img
              src='https://i.imgur.com/ODEbA6T.png'
              alt='Featured on DigitalJournal'
              className='news-logo'
            />{' '}
            <img
              src='https://i.imgur.com/HrJWOxm.png'
              style={{ maxWidth: '80' }}
              alt='Featured on NCN'
              className='news-logo'
            />{' '}
            <img
              src='https://i.imgur.com/Clqb8aD.png'
              alt='Featured on Market Watch'
              className='news-logo'
            />
          </div>
        </div>
        <span>AND OVER 250 NEWS SITES</span>
      </div>
    </div>
  )
}
