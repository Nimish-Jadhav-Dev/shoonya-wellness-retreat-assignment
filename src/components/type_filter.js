import React from 'react'
import Dropdown from './dropdown';

const TypeFilter = () => {
    const options = [
        { value: 'yoga', label: 'Yoga' },
        { value: 'meditation', label: 'Meditation' },
        { value: 'detox', label: 'Detox' },
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
            placeholder="Filter by retreat type"
          />
        </>
      );
}

export default TypeFilter