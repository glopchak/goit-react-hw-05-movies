import { Input, Button } from "./SearchBar.styled";

export const SearchBar = ({ onSubmit, query }) => {

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input type="text" name="query" defaultValue={query} />
        <Button type="submit">Serch</Button>
      </form>
    </>
  );
};
