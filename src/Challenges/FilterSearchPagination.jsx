import { useState, useEffect, useMemo } from "react";

const DATA = [
  { id: 1, name: "React", category: "Frontend", level: "Advanced" },
  { id: 2, name: "Angular", category: "Frontend", level: "Advanced" },
  { id: 3, name: "Vue", category: "Frontend", level: "Intermediate" },
  { id: 4, name: "Node.js", category: "Backend", level: "Advanced" },
  { id: 5, name: "Java", category: "Backend", level: "Advanced" },
  { id: 6, name: "HTML", category: "Frontend", level: "Beginner" },
  { id: 7, name: "CSS", category: "Frontend", level: "Beginner" },
  { id: 8, name: "AWS", category: "Cloud", level: "Intermediate" },
];

const ITEMS_PER_PAGE = 5;

export const FilterSearchPagination = () => {
  const [searchText, setSearchText] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  const filteredData = useMemo(() => {
    return DATA.filter((item) => {
      const search = searchText.toLocaleLowerCase();
      console.log(item);
      console.log(Object.values(item));
      console.log(Object.values(item).join(""));
      // const matchesSearch = Object.values(item)
      //   .join("")
      //   .toLowerCase()
      //   .includes(search);

      const matchesSearch =
        item.name.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search) ||
        item.level.toLowerCase().includes(search);

      const matchesCategory = category == "All" || item.category == category;

      const matchesLevel = level == "All" || item.level == level;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchText, category, level]);

  useEffect(() => {
    setPageNo(1);
  }, [searchText, category, level]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const startIndex = (pageNo - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [pageNo, filteredData]);

  const categories = useMemo(() => {
    return ["All", ...new Set(DATA.map((item) => item.category))];
  }, []);

  const levels = useMemo(() => {
    return ["All", ...new Set(DATA.map((item) => item.level))];
  }, []);

  return (
    <div style={{ marginWidth: "400px", margin: "20px" }}>
      <h3>Search with Pagination</h3>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: "20px", width: "40%", padding: "8px" }}
      />

      <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>

        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          {levels.map((level) => (
            <option value={level} key={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <ul>
        {paginatedData.length
          ? paginatedData.map((item) => (
              <li key={item.id}>
                {item.name} -{item.category} - {item.level}
              </li>
            ))
          : "No Data Found"}
      </ul>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setPageNo((prev) => prev - 1)}
          disabled={pageNo == 1}
        >
          Prev
        </button>

        <span>
          {pageNo} of {totalPages || 1}
        </span>

        <button
          onClick={() => setPageNo((prev) => prev + 1)}
          disabled={pageNo === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
