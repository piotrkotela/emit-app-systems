import styles from './Navigation.module.css'

// TODO ROUTING
const Navigation = () => {
    return (
      <div className={styles.navigation}>
        <div className={styles.navigationContainer}>
            <p>EMIT</p>
            <div className={styles.navRight}>
                <p>story</p>
                <p>map</p>
                <p>future</p>
            </div>
        </div>
      </div>   
    )
}
export default Navigation