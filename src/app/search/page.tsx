import { SearchComponent } from "../../../core/page";

type Props = {
    param: {},
    searchParams: {
        [key: string] : string
    }
}

export default  async function Search({ param, searchParams } : Props){
    return <SearchComponent query={searchParams.q}/>
}