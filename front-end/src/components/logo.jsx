import { Heading } from '@chakra-ui/react'
import NewsLogo from '../assets/news_logo.png'

function Logo() {
    return (
        <Heading><img src={NewsLogo} style={{ width: 110, heigh: 110, marginLeft: 0, marginTop: 0 }}></img></Heading>
    );
}


export default Logo



