import ContentContainer from './ContentContainer'
import { Blockquote } from './Typography'
import Divider from './Divider'

export default function Footer() {
    return (
        <footer>
            <Divider />
            <ContentContainer>
                <Blockquote>I'm runnin' for the last train home</Blockquote>
            </ContentContainer>
        </footer>
    )
}
