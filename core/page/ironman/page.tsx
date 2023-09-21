'use client'

// hook
import {useEffect, useState} from 'react'

// component
import { ListItem } from '../../component'

// types
import { GiphyItem } from '../../config/types'

export default function IronManComponent() : JSX.Element {

    const [data, setData] = useState<GiphyItem[]>([])

    useEffect(() => {
        GetData()
    }, [])

    /**
     * fungsi ini digunakan untuk mengambil data giphy
     */
    const GetData = async () => {

        const req = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=iron%20man&limit=9`)
        const res = await req.json()

        let result : GiphyItem[] = []

        // @ts-ignore
        res.data.forEach(items => {

            result.push({
                image: items.images.original.url,
                description: items.title
            })

        })

        setData(result)

    }

    return (
        <div className='container'>

            {/* header */}
            <div className='header'>
                <h1>IRON MAN GIPHY</h1>
            </div>
            {/*  */}

            <ListItem data={data}/>
        </div>
    )
}