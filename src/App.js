
import Grid from './components/grid/grid.component';
import { useState, useEffect } from 'react';
import mockData from './mockData.json';
import SearchBox from './components/search-box/search-box.component';
import Dropdown from './components/drodown/dropdown.component';

function App() {

  const [towns, setTown] = useState([]);
  const [types, setType] = useState([]);
  const [hours, setHours] = useState([]);
  const [activeTown, setActiveTown] = useState('');
  const [activeType, setActiveType] = useState('');
  const [activeHours, setActiveHours] = useState('');
  const [searchField, setSearchField] = useState('');
  const [filteredJobs, setFilterJobs] = useState(mockData.positions);

  // Sortera upp datan om placering till dropdown
  mockData.positions.forEach(item=>{
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
      job => (job.title.toLocaleLowerCase().includes(searchField) && job.town == activeTown && job.hours == activeHours && activeType == activeType)
    );
    setFilterJobs(newFilteredJobs);
  }, [jobs, searchField, activeTown, activeHours, activeType]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTownChange = (event) => {
    const selectedTownString = event.target.value;
    setActiveTown(selectedTownString);
  };

  const onTypesChange = (event) => {
    const selectedTypeString = event.target.value;
    setActiveType(selectedTypeString);
  };

  const onHoursChange = (event) => {
    const selectedHoursString = event.target.value;
    setActiveHours(selectedHoursString);
  };

  return (
    <div className="App">

      <div className='container px-4 mx-auto'>

        {/* Rubrik */}
        <div className='text-center'>
          <h1 className='text-3xl font-bold py-12'>Lediga jobb</h1>
        </div>

        {/* Sökruta */}
        <div className='flex justify-center'>
          <SearchBox onChangeHandler={onSearchChange} placeholder='Sök på jobbtitlar här' className='search-box' />
        </div>

        {/* Filter / dropdowns */}
        <div className='flex flex-col lg:flex-row pt-8 pb-12 justify-center gap-4'>
          <Dropdown values={towns} onChangeHandler={onTownChange} name="towns" id="towns-select" />
          <Dropdown values={types} onChangeHandler={onTypesChange} name="types" id="types-select" />
          <Dropdown values={hours} onChangeHandler={onHoursChange} name="hours" id="hours-select" />
        </div>
      </div>

      {/* Grid med korten */}
      <div className='bg-sky-900 px-4'>
        <div className='container mx-auto pt-8 pb-16'>
          <div className='text-white text-center pb-8 font-bold'>Visar {filteredJobs.length} jobb av {jobs.length}</div>
          <Grid data={filteredJobs} />
        </div>
      </div>
    </div>
  );
}

export default App;
