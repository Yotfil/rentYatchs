import styles from './footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <small>
          © Luxury 305 Rentals, All Rights Reserved. More information
          <a
            href=''
            className={styles.link}>
            Contact Us
          </a>
        </small>
      </p>
    </footer>
  )
}

export default Footer
