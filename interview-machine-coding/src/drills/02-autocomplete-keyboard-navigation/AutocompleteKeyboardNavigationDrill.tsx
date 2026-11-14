/**
 * Day 5 Machine Coding: Search Autocomplete with Keyboard Navigation
 * Target Time: 45 Minutes
 * Target Companies: Google, Uber, Amazon
 *
 * Requirements:
 * 1. ArrowDown & ArrowUp navigation through list with wrapping / bounds
 * 2. Enter to choose active item
 * 3. Escape to close dropdown
 * 4. Highlight matching substring in filtered options
 */
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FC,
  type KeyboardEvent,
} from "react";

interface AutocompleteProps {
  suggestions: string[];
  onSelect: (value: string) => void;
  placeholder?: string;
}
export const AutocompleteKeyboardNavigationDrill: FC<AutocompleteProps> = ({
  placeholder = "Search stock ticker (e.g. Uber, Apple)...",
}) => {
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<
    Array<{ title: string }>
  >([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickedOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !(e.target instanceof Node && containerRef.current.contains(e.target))
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickedOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickedOutside);
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredOptions([]);
      setIsOpen(false);
    } else {
      handleSearch(query);
    }
  }, [query]);

  const handleSearch = async (searchQuery: string) => {
    setLoading(true);
    const response = await fetch(
      `http://localhost:4000/api/search?q=${searchQuery}&delay=1000`,
    );
    const data = await response.json();
    setFilteredOptions(data.results);
    setIsOpen(true);
    setLoading(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" && filteredOptions.length > 0) {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => {
        return prev < filteredOptions.length - 1 ? prev + 1 : 0;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => {
        return prev > 0 ? prev - 1 : filteredOptions.length - 1;
      });
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < filteredOptions.length) {
        const selectedOption = filteredOptions[selectedIndex];
        setQuery(selectedOption.title);
        setIsOpen(false);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  };

  const selectItem = (item: { title: string }) => {
    setQuery(item.title);
    setIsOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">
          02. Autocomplete with Keyboard Navigation
        </h2>
        <p className="text-slate-400 text-sm mb-4">
          Day 5 Machine Coding: Implement dropdown selection using ArrowUp,
          ArrowDown, Enter, and Escape.
        </p>

        <div className="max-w-md">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
          />
          {isOpen && (
            <div className="absolute z-10 mt-2 bg-slate-900 border border-slate-800 rounded-xl shadow-lg">
              {loading && (
                <div className="px-4 py-2 text-slate-400">Loading...</div>
              )}
              {!loading && filteredOptions.length > 0 && (
                <ul className="py-2">
                  {filteredOptions.map((option) => (
                    <li
                      style={{
                        backgroundColor:
                          filteredOptions[selectedIndex]?.title === option.title
                            ? "#1e293b"
                            : "transparent",
                      }}
                      key={option.title}
                      className="px-4 py-2 hover:bg-slate-800 cursor-pointer"
                      onClick={() => selectItem(option)}
                    >
                      {option.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
