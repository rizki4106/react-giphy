import style from './Item.module.css'

// define props
import { GiphyItem } from '../../config/types'

/**
 * Menampilkan item giphy
 */
export default function Item({ image, description } : GiphyItem) : JSX.Element {
    return (
        <div className={style.item}>
            <img src={image} alt={description}/>
        </div>
    )
}