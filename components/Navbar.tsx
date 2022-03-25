import ActiveLink from './ActiveLink'
import styles from './Navbar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

const Navbar = () => {
    return (
        <nav className={styles.menuContainer}>
            {
                menuItems.map(({ text, href }, index) => (
                    <ActiveLink key={index} text={text} href={href} />
                ))
            }
        </nav>
    )
}

export default Navbar