import React, { ChangeEvent, SyntheticEvent, useState } from 'react'

interface Props {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    const handleClick = (e : SyntheticEvent) => {
        console.log(e);
    }

    return (
        <div>
            <input value={search} onChange={(e) => handleChange(e)}></input>
            <button onClick={(e) => handleClick(e)}>submit</button>
        </div>
  )
}

export default Search