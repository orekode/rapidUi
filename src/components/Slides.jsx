
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { useItems } from '../apiCalls/read';

export const Sm = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const page = 1;
    const filters = {};
    const { data, isLoading, isError } = useItems({
        target: 'slides',
        params: { page, filters }
    });
    
    return (
        <div className='w-[350px] h-[200px rounded-3xl mb-3 overflow-hidden'>
            <AutoplaySlider animation="cubeAnimation" play interval={6000}>
                {(data && data.data && data.data.map) && data.data.map((item) =>
                    <div data-src={item.image} className="slide-item w-[350px] h-[200px] text-white rounded-3xl mb-3">
                    </div>
                )}
            </AutoplaySlider>
        </div>
    );
}