import SearchTerm from "../components/SearchTerm";

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
      <h3 className="text-2xl font-bold">My Task</h3>
      <SearchTerm />
    </div>
  );
}

export default Header;
