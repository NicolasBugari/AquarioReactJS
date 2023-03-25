import { css } from '@emotion/react'
import Spinner from 'react-bootstrap/Spinner';
import './Load.css'

const Load = () => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
`;

    return (
        <>
            <div className="loadContainerMobile">
                <Spinner animation='border' variant='info' css={override} size={60} />
            </div>
            <div className="loadContainer">
                <Spinner animation='border' variant='info' css={override} size={150} />
            </div>
        </>
    )
}

export default Load
