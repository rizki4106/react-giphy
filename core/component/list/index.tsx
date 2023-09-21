'use client'

import style from './List.module.css'

// component
import Item from '../item'

// types
import { GiphyItem } from '../../config/types'
import { useEffect } from 'react'

// define props types
type Props = {
    data: GiphyItem[]
}

/**
 * Menampilkan list item
*/
export default function ListItem({ data } : Props): JSX.Element {

    useEffect(() => {

    }, [data])

    return (
        <div className={style.list_item}>
            {data.map((items, i) => (
                <Item
                    image={items.image}
                    description={items.description}
                    key={i}
                />
            ))}
        </div>
    )
}