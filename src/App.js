import { LandingPage } from './LandingPage'
import './styles/main.scss'

class App extends React.Component {
    render() {
        return (
            <div>
                <LandingPage name={'George'} />
                <p>Landing page</p>
                <img src={require('./images/Kilimanjaro.jpg')} />
            </div >
        )
    }
}

export default App
