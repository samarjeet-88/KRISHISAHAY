import { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate"
import { GEO_API_URL,geoApiOptions } from "../../api";


const Search=({onSearchChange})=>{

    const [search,setSearch]=useState(null)


    // const loadOptions=(inputValue)=>{
    //     return 
    //         try {
    //             const response = await fetch('/adminDivisions', options);
    //             const result = await response.text();
    //             console.log(result);
    //         } catch (error) {
    //             console.error(error);
    //         }
        
    // }

    // const loadOptions = async (searchInputValue) => {
    //     try {
    //       const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${searchInputValue}`, geoApiOptions);
    //       const result = await response.json();
    
    //       return {
    //         options: result.data.map((city) => {
    //           return {
    //             value: `${city.latitude} ${city.longitude}`,
    //             label: `${city.name}, ${city.countryCode}`,
    //           };
    //         }),
    //       };
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    const loadOptions = async (searchInputValue, prevOptions) => {
        try {
          const response = await fetch(
            `${GEO_API_URL}/cities?namePrefix=${searchInputValue}`,
            geoApiOptions
          );
          const result = await response.json();
    
          return {
            options: result.data.map((city) => ({
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            })),
            hasMore: false, // Assuming there are no more pages to load
          };
        } catch (error) {
          console.error(error);
          return {
            options: [],
            hasMore: false,
          };
        }
      };

    const handleOnChange=(searchData)=>{
        setSearch(searchData)
        onSearchChange(searchData)
    }

    return(
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}
export default Search