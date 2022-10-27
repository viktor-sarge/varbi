
import Grid from './components/grid/grid.component';
import { useState, useEffect } from 'react';
import mockData from './mockData.json';
import SearchBox from './components/search-box/search-box.component';
import Dropdown from './components/drodown/dropdown.component';

function App() {

  const [towns, setTown] = useState([]);
  const [types, setType] = useState([]);
  const [hours, setHours] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredJobs, setFilterJobs] = useState(mockData.positions);

  // Sortera upp datan om placering till dropdown
  mockData.positions.forEach(item=>{
    console.log(item);
    if(!towns.includes(item.town)) {
      setTown([...towns, item.town ])}
    if(!types.includes(item.type)) {
      setType([...types, item.type ])}
    if(!hours.includes(item.hours)) {
      setHours([...hours, item.hours ])}
  })
  const jobs = mockData.positions;
  towns.sort();
  types.sort();
  hours.sort();


  useEffect(()=>{
    const newFilteredJobs = jobs.filter(
      job => job.title.toLocaleLowerCase().includes(searchField)
    );
    setFilterJobs(newFilteredJobs);
  }, [jobs, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App container mx-auto">
      <div className='text-center'>
        <h1 className='text-3xl font-bold py-12'>Lediga jobb</h1>
      </div>
      <div className='flex justify-center'>
        <SearchBox onChangeHandler={onSearchChange} placeholder='Sök på jobbtitlar här' className='search-box' />
      </div>

      <div className='flex py-4 justify-center'>
        <Dropdown values={towns} name="towns" id="towns-select" />
        <Dropdown values={types} name="types" id="types-select" />
        <Dropdown values={hours} name="hours" id="hours-select" />
      </div>

      <Grid data={filteredJobs} />
    </div>
  );
}

export default App;
