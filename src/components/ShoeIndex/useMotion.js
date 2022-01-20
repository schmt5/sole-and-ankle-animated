import * as React from 'react';
import { animate, spring } from 'motion';

const useMotion = (id) => {
    React.useEffect(() => {
      

        animate(`#${id}`, {
            x: 200,
        }, {
            duration: 1,
            easing: spring(),
        }
        );
    }, [id]);
};

export default useMotion;
