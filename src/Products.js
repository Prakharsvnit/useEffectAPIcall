import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://dummyjson.com/products";

// /always function expression,not decalration
const Prodcuts = () => {
  const [phones, setPhones] = useState([]); //state to store response from API

  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    const fetchPhones = async () => {
      const response = await axios.get(baseURL);
      // console.log(response);
      setPhones(response.data.products);
    };
    //error handling for async fetchPhones function
    fetchPhones().catch((error) => console.log(error));
  }, []); //empty dependency to avoid infinte loop

  return (
    <>
      <h3>Phones</h3>
      {phones?.map((phone) => (
        <li key={phone.id}>{phone.title}</li>
      ))}
    </>
  );
};

export default Prodcuts;

//useEffect(async () => {
// const data = await fetchData();
// }, [fetchData])

// The issue here is that the first argument of useEffect
// is supposed to be a function that returns either nothing
// (undefined) or a function (to clean up side effects).
// But an async function returns a Promise, which can't be
// called as a function! It's simply not what the useEffect hook
// expects for its first argument.

//? for optional chaining to avoid undefined behaviour
