
import Grid from './components/grid/grid.component';
import { useState, useEffect } from 'react';
import mockData from './mockData.json';
import municipalities from './municipalityCodes.json';
import SearchBox from './components/search-box/search-box.component';
import Dropdown from './components/drodown/dropdown.component';
import CheckboxGroup from './components/checkboxGroup/checkbox.component';

function App() {

  const [towns, setTown] = useState([]);
  const [types, setType] = useState([]);
  const [hours, setHours] = useState([]);
  const [activeTowns, setActiveTowns] = useState([]);
  const [activeTypes, setActiveTypes] = useState([]);
  const [activeHours, setActiveHours] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredJobs, setFilterJobs] = useState(mockData.positions);

  // Sortera upp datan om placering till dropdown
  mockData.positions.forEach(item=>{
    if(!towns.includes(item.codes.municipality)) {
      setTown([...towns, item.codes.municipality ])}

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
    //debugger
    const newFilteredJobs = jobs.filter(
      job => (
        job.title.toLocaleLowerCase().includes(searchField) 
        && (activeTowns.length == 0 || activeTowns.includes(String(job.codes.municipality)) )
        && (activeHours.length == 0 || activeHours.includes(String(job.hours)) )
        && (activeTypes.length == 0 || activeTypes.includes(String(job.type)) )
        )
    );
    setFilterJobs(newFilteredJobs);
  }, [jobs, searchField, activeTowns, activeHours, activeTypes]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTownsChange = (event) => {
    console.log(event)
    const newTowns = activeTowns;
    const value = event.target.value;
    const index = newTowns.indexOf(value);
    if(index > -1) {
      newTowns.splice(index,1);
    } else {
      newTowns.push(event.target.name);
    }
    setActiveTowns([...newTowns]);
  };

  const onTypesChange = (event) => {
    const newTypes = activeTypes;
    const value = event.target.name;
    const index = newTypes.indexOf(value);
    if(index > -1) {
      newTypes.splice(index,1);
    } else {
      newTypes.push(event.target.name);
    }
    setActiveTypes([...newTypes]);
  };

  const onHoursChange = (event) => {
    const newHours = activeHours;
    const value = event.target.name;
    const index = newHours.indexOf(value);
    if(index > -1) {
      newHours.splice(index,1);
    } else {
      newHours.push(event.target.name);
    }
    setActiveHours([...newHours]);
  };

  // Preppa value och klartextnamn för typ-dropdown
  const dropdownTownsData = towns.map((entry)=>{
    return {value: entry, name: municipalities[entry]}
  });

  // Preppa value och klartextnamn för typ-dropdown
  const dropdownTypesData = types.map((entry)=>{
    return {value: entry, name: entry}
  });

    // Preppa value och klartextnamn för hours-dropdown
    const dropdownHoursData = hours.map((entry)=>{
      return {value: entry, name: entry}
    });
  


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
          <CheckboxGroup values={dropdownTownsData} onChangeHandler={onTownsChange} name="towns" id="towns-select" />
          <CheckboxGroup values={dropdownHoursData} onChangeHandler={onHoursChange} name="hours" id="hours-select" />
          <CheckboxGroup values={dropdownTypesData} onChangeHandler={onTypesChange} name="types" id="types-select" />
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
