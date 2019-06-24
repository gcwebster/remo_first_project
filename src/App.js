import { Greeting } from './Greeting'
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import { LandingPage } from './LandingPage'
import './styles/main.scss'

class App extends React.Component {
    render() {
        return (
            <div>
                <LandingPage name={"George"} />
                <p>Landing page</p>
                <img src={require('./images/Kilimanjaro.jpg')} />
            </div >
        )
    }
    // console.log(greeting('George'));
}

export default App
