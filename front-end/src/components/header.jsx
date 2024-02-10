import { Heading } from '@chakra-ui/react'
import NewsLogo from '../assets/news_logo.png'

function Header() {
    return (
        <Heading><img src={NewsLogo} style={{ width: 141, marginLeft: 0, marginTop: 0 }}></img></Heading>
    );
}

export default Header;


