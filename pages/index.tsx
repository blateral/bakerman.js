import * as React from 'react';
import Nl2br from '../src/components/base/nl2br';
import Wrapper from '../src/components/base/Wrapper';

export default () => (
    <Wrapper>
        <h2>
            Welcome to next.
            <s>js</s> tsx!
        </h2>
        <p>
            <Nl2br
                text={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
        
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet `}
            />
        </p>
    </Wrapper>
);
