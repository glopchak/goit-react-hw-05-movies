
export const SearchBar = ({ onSubmit, query }) => {

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Serch</button>
      </form>
    </>
  );
};
