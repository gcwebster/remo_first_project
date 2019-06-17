import { Greeting } from './Greeting';
import { Welcome } from './Welcome';
import './styles/main.scss';


class App extends React.Component {
    render() {
        return (
            <div>
                <p>HELLO</p>
                <Welcome />
                <p>please change!!</p>
            </div >
        );
    }
    //console.log(greeting('George'));
}

export default App;

