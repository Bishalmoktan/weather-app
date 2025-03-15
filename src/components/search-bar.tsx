import { useDebounce } from "@/hooks/use-debounce";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const debouncedInput = useDebounce(input, 1000);

  useEffect(() => {
    if (debouncedInput.trim()) {
      navigate(`/cities?city=${debouncedInput.trim()}`);
    }
  }, [debouncedInput, navigate]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input.trim()) {
      navigate(`/cities?city=${input.trim()}`);
    }
  };
  return (
    <input
      type="text"
      placeholder="Search for cities"
      className="bg-[#202b3b] text-gray-200 focus:outline-none py-2 px-4 w-[80vw] md:w-3xl rounded-md mt-2 border"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchBar;
