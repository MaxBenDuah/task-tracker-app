import SearchTerm from "../components/SearchTerm";

function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <h3 className="text-2xl font-bold">My Task</h3>
      <SearchTerm />
    </div>
  );
}

export default Header;
