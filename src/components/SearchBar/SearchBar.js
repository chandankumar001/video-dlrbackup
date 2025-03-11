import { Input } from "antd";
import "./SearchBar.scss";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <Input
        placeholder="Search videos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
