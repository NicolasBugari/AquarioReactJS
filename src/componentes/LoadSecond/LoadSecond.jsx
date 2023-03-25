import { css } from '@emotion/react';
import Spinner from 'react-bootstrap/Spinner';
import './LoadSecond.css';

const LoadSecond = () => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
`;

    return (
        <>
            <div className="loadSecondContainerMobile">
                <Spinner animation='border' variant='info' css={override} size={150} />
            </div>
            <div className="loadSecondContainer">
                <Spinner animation='border' variant='info' css={override} size={150} />
            </div>
        </>
    )
}

export default LoadSecond