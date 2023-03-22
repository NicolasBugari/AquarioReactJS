import { css } from '@emotion/react'
import { Spinner } from 'react-bootstrap';
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
                <Spinner color='#dc3545' css={override} size={60} />
            </div>
            <div className="loadContainer">
                <Spinner color='#dc3545' css={override} size={150} />
            </div>
        </>
    )
}

export default Load
