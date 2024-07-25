import React from 'react'

import './filterandsearch.css'
import TypeFilter from './type_filter';
import DateFilter from './date_filter';
import Search from './searchbar';

export default function FilterandSearch() {
     
      return (
        <>
          <div className='fl_sc_div'>

            <div className='filter'>
            <TypeFilter/>
            <DateFilter/>
            </div>

            <div className='searchbar'>
            <Search/>
            </div>

        </div>
        </>
      );
}
