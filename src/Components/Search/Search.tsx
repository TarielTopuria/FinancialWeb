import { SyntheticEvent, ChangeEvent } from "react";


interface Props {
    handleClick: (e: SyntheticEvent) => void;
    handleChange: (e : ChangeEvent<HTMLInputElement>) => void;
    search: string | undefined;
}

const Search: React.FC<Props> = ({handleClick, handleChange, search}: Props): JSX.Element => {
    return (
        <div>
            <input value={search} onChange={(e) => handleChange(e)}></input>
            <button onClick={(e) => handleClick(e)}>submit</button>
        </div>
  )
}

export default Search