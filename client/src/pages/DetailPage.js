import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useEffect } from 'react'
import { LinkCard } from '../components/LinkCard'
import { Loader } from '../components/Loader'

export const DetailPage = () => {
    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [link, setLink] = useState(null)
    const linkId = useParams().id

    const getLink = useCallback(async () => {
        try {
            /* url, method, body, headers */
            const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLink(fetched)
        } catch (e) {}
    }, [token, linkId, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader />
    }

    return <>{!loading && link && <LinkCard link={link} />}</>
}
