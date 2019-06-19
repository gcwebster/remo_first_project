import { Greeting } from './Greeting'
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import './styles/main.scss'

class App extends React.Component {
    render() {
        return (
            <div>
                <p>This is coming from inside the app component</p>
                <Greeting name="George" />
                <Counter />
            </div >
        )
    }
    // console.log(greeting('George'));
}

export default App
