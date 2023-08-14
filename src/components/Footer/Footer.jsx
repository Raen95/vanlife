import './style.scss'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Ⓒ {currentYear} #VANLIFE</p>
        </footer>
    )
}