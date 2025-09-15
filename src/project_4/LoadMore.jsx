import { useEffect, useState } from "react";

const LoadMore = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);
  const [expandedItems, setExpandedItems] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json();
        setItems(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleLoadToggle = () => {
    if (visibleCount >= items.length) {
      setVisibleCount(5);
    } else {
      setVisibleCount(items.length);
    }
  };
  const addToCart = (item) => {
    const newItem = item;
    setCart([...cart, newItem]);
  };
  if (loading) return <div className="w-10 mx-auto my-40">loading...</div>;
  return (
    <div className="w-150 h-100 overflow-y-auto mx-auto my-20 border p-4 space-y-5 flex flex-col items-center relative">
      {items.slice(0, visibleCount).map((item) => (
        <div key={item.id} className="w-130 mx-auto border-b-1">
          <div className="size-20">
            <img
              className="w-full h-full object-contain"
              src={item.image}
              alt={item.title}
            />
          </div>
          <p>
            name{" "}
            {expandedItems[item.id] || item.title.length <= 40
              ? item.title
              : item.title.slice(0, 40) + "..."}{" "}
            {item.title.length > 40 && (
              <span
                onClick={() => toggleExpand(item.id)}
                className="text-blue-500 cursor-pointer ml-1"
              >
                {expandedItems[item.id] ? "Show Less" : "Show More"}
              </span>
            )}
          </p>
          <p>${item.price}</p>
          <button
            onClick={() => addToCart(item)}
            className="text-xs px-4 py-1 bg-red-500 my-1 text-white cursor-pointer rounded"
          >
            add to cart
          </button>
        </div>
      ))}

      {items.length > 5 && (
        <button
          onClick={handleLoadToggle}
          className="px-4 py-2 bg-red-500 text-white rounded mt-4 text-center"
        >
          {visibleCount >= items.length ? "Show Less" : "Load More"}
        </button>
      )}
      <div className="absolute top-2 right-2 text-black">
        cart {cart.length}
      </div>
    </div>
  );
};

export default LoadMore;
