import style from './Home.module.css'

import Image from 'next/image'
import Link from 'next/link'

export default function HomeComponent(): JSX.Element {
    return (
        <div className={style.wrapper}>
            <h3>WELCOME TO YOUR GIPHY</h3>

            {/* giphy name & logo */}
            <div className={style.flex_row}>
                <Image 
                    src={"/images/logo.png"}
                    width={150}
                    height={160}
                    alt='giphy'
                />
                <h1>GIPHY</h1>
            </div>

            {/* menu */}
            <div className={style.menu}>
                <Link href='/ironman'>GIPHY IRON MAN</Link>
                <Link href='/search'>SEARCH YOUR GIPHY</Link>
            </div>
            {/*  */}
        </div>
    )
}