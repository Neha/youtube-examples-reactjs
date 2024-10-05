import React, { useState, useTransition } from 'react';

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

const FilterableList = () => {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filtered = items.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
      setFilteredItems(filtered);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search items..."
      />
      {isPending && <div>Loading...</div>}
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableList;
