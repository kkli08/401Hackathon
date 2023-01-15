import Attraction from '../components/Attraction';

const View = () => {
    return(
        <div className='food'>
            <Attraction title = 'University of Alberta' api = 'uofa'/>
            <Attraction title = 'Rogers Centre' api = 'rc'/>
            <Attraction title = 'Royal Alberta Museum' api = 'ram'/>
            <Attraction title = 'IKEA Edmonton' api = 'ikea'/>
            <Attraction title = 'West Edmonton Mall' api = 'wem'/>
        </div>
    )
}

export default View
