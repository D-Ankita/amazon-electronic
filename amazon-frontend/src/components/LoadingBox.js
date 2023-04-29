import React from 'react'
import DownloadingIcon from '@material-ui/icons/Loop';
import "../styles/LoadingBox.css"

const LoadingBox = () => {
    return (
        <div className="loading-box">
            {/* <DownloadingIcon /> */}
            <div className="content">
                <div className="loading">
                    <p>loading</p>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default LoadingBox
