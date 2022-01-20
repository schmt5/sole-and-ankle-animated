import * as React from 'react';
import { animate } from 'motion';

const MotionOne = ({ children, animation, transition }) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        animate(
            ref.current,
            animation,
            transition
        );
    }, [ref, children, animation, transition]);

    return (
        <div ref={ref}>
            {children}
        </div>
    );
};

export default MotionOne;
