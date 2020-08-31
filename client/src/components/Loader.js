import React from 'react'

export const Loader = () => {
    return (
        <div style={{ paddingTop: '0', width: '100%' }}>
            <div className='progress'>
                <div className='indeterminate'></div>
            </div>
        </div>
    )
}
