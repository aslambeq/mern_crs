import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>link</h2>

            <p>
                cutted:{' '}
                <a href={link.to} target='_blank' rel='noopener noreferrer'>
                    {link.to}
                </a>
            </p>
            <p>
                source:{' '}
                <a href={link.from} target='_blank' rel='noopener noreferrer'>
                    {link.from}
                </a>
            </p>
            <p>
                link clicks: <strong>{link.clicks}</strong>
            </p>
            <p>
                date created: <strong>{new Date(link.date).toLocaleDateString()}</strong>
            </p>
        </>
    )
}
