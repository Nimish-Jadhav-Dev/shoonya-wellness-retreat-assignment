import React from 'react'
import Dropdown from './dropdown';

const DateFilter = () => {
    const options = [
        { value: '2023-24', label: '2023-24' },
        { value: '2024-25', label: '2024-25' },
      ];
    
      const handleSelect = (option) => {
        console.log('Selected option:', option);
        // Do something with the selected option
      };
    
      return (
        <>
          <Dropdown
            options={options}
            onSelect={handleSelect}
            placeholder="Filter by Date"
          />
        </>
      );
}

export default DateFilter