import { useState } from "react";

type HSItem = {
  code: string;
  description: string;
};

const dummyHSData: HSItem[] = [
  { code: "0101.21", description: "Pure-bred breeding horses" },
  { code: "0201.30", description: "Fresh beef, boneless" },
  { code: "0402.10", description: "Milk and cream in solid forms" },
  { code: "0703.10", description: "Fresh onions and shallots" },
  { code: "0901.21", description: "Roasted coffee, not decaffeinated" },
];

export default function HSCodeSelector({
  onSelect,
}: {
  onSelect: (item: HSItem) => void;
}) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<HSItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);

    if (value.trim().length === 0) {
      setFiltered([]);
      setShowDropdown(false);
      return;
    }

    const results = dummyHSData.filter(
      (item) =>
        item.code.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(results);
    setShowDropdown(true);
  };

  const handleSelect = (item: HSItem) => {
    setQuery(`${item.code} - ${item.description}`);
    setShowDropdown(false);
    onSelect(item);
  };

  return (
    <div className="relative w-full">
      <label className="text-sm text-gray-700">HS Code Search</label>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search HS code..."
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />

      {showDropdown && filtered.length > 0 && (
        <div className="absolute mt-1 w-full bg-white shadow-lg border rounded z-50 max-h-60 overflow-auto">
          {filtered.map((item) => (
            <div
              key={item.code}
              onClick={() => handleSelect(item)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              <p className="font-semibold">{item.code}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
