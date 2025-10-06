export const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist"); // ✅ fixed key
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log("Error loading wishlist:", err);
    return [];
  }
};

export const updateList = (Product) => {
  const wishList = loadWishlist();

  try {
    const isDuplicate = wishList.some((p) => p.id === Product.id);
    if (isDuplicate) return alert("Already added in wishlist");

    const updatedList = [...wishList, Product];
    localStorage.setItem("wishlist", JSON.stringify(updatedList)); // ✅ same key
  } catch (err) {
    console.log(err);
  }
};

export const removeFromWishlist = (id) => {
  try {
    const wishList = loadWishlist() || [];
    const updatedList = wishList.filter((p) => p.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedList)); // ✅ same key
    return updatedList;
  } catch (err) {
    console.log(err);
  }
};
