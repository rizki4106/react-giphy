'use client'
// hook
import {useEffect, useState} from 'react'

// styling
import style from './Search.module.css'

// next component
import { useRouter, useSearchParams } from 'next/navigation'
import { GiphyItem } from '../../config/types'
import { ListItem } from '../../component'

type Props = {
    query: string
}

export default function SearchComponent({query} : Props) : JSX.Element {

    const router = useRouter()

    // data giphy
    const [data, setData] = useState<GiphyItem[]>([])

    // styling
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {

        if(query !== undefined){
            getGiphy(query)
        }

    }, [query])

    /**
     * Saat user mengetik query pada input arahkan ke halaman search
     * dengan mengirimkan parameter query (q)
     * @param query 
     */
    const handleInput = (query : string) => {

        if(query.length > 0){

            // jika query dikirimkan maka arahkan ke halaman search
            router.push(`/search/?q=${query}`)

        }else{

            // jika query kosong arahkan ke halaman search tanpa query
            router.push('/search')
        }
    }

    /**
     * Fungsi ini digunakan untuk mencari data gihpy berdasrkan inputan user
     */
    const getGiphy = async (query : string) => {

        setLoading(true)

        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${query}&limit=9`)
        .then(res => { return res.json() })
        .then(res => {
            
            let data : GiphyItem[] = []

            // @ts-ignore
            res.data.forEach(items => {
                data.push({
                    image: items.images.original.url,
                    description: items.title
                })
            })

            setData(data)

            setLoading(false)
        })
        .catch(err => console.error(err))
    }

    return (
        <div className='container'>
            <div className='header'>
                <h1>SEARCH YOUR GIPHY</h1>

                {/* search bar */}
                <input 
                    type='text'
                    onChange={evt => handleInput(evt.target.value)}
                    className={style.input} placeholder='Search Giphy'
                    autoFocus={true}
                />
                {/*  */}
            </div>

            {/* content */}
            {
                query !== undefined ? 

                    loading ?

                    <div style={{textAlign: 'center'}}>
                        <span>Loading...</span>
                    </div>

                    :
                    <ListItem data={data}/>
                :
                    ''
            }
            {/*  */}
        </div>
    )
}