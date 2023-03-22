import apiURL from "../api";
// import and prepend the api url to any fetch calls

export const MainView = () => {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);

  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();
      setSauces(saucesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchSauces();
  }, []);

  //GET fetch request for all items
  async function fetchItems() {
    try {
      const res = await fetch(`${apiURL}/items`);
      const itemsData = await res.json();
      setItems(itemsData);
    } catch (err) {
      console.log("Error!", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <main>
        <h1 className="heading">Sauce Store</h1>
        <h3 id="heading2">All things 🔥</h3>
        <ItemsList items={items} />
      </main>
    </>
  );
};
