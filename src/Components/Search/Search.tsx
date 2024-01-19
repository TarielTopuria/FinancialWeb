import { SyntheticEvent, ChangeEvent } from "react";


interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    handleSearchChange: (e : ChangeEvent<HTMLInputElement>) => void;
    search: string | undefined;
}

const Search: React.FC<Props> = ({onSearchSubmit, handleSearchChange, search}: Props): JSX.Element => {
    return (
        <>
            <form onSubmit={onSearchSubmit}>
                <input value={search} onChange={handleSearchChange}></input>
            </form>
        </>
  )
}

export default Search