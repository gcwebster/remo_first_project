import src from './images/Kilimanjaro2.jpg'
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>This is coming from inside the welcome component</p>
                <img src={src} />
                <img src="./images/Kilimanjaro.jpg" />
            </div>
        )
    }
}

export { Welcome }
