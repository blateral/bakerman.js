import React, { FC } from 'react';

const Nl2br: FC<{
    text: string;
}> = (props) => {
    return (
        <React.Fragment>
            {props.text.split('\n').map((item, key) => {
                return (
                    <React.Fragment key={key}>
                        {item}
                        <br />
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};

export default Nl2br;
