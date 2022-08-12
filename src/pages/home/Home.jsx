import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Calendar from '../calendar/Calendar'
import './home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Header />
        </div>
    )
}

export default Home