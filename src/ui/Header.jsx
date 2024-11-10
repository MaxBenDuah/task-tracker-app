import SearchTerm from "../components/SearchTerm";

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
      <h3 className="text-2xl font-bold mb-4 md:mb-0">My Task</h3>
      <SearchTerm />
    </div>
  );
}

export default Header;
