import { toast } from "react-toastify";

export const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist"); 
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
    if (isDuplicate) return toast.warning("Already added in wishlist");

    const updatedList = [...wishList, Product];
    localStorage.setItem("wishlist", JSON.stringify(updatedList)); 
  } catch (err) {
    console.log(err);
  }
  toast.success("Added to wishlist successfully")
};

export const removeFromWishlist = (id) => {
  try {
    const wishList = loadWishlist() || [];
    const updatedList = wishList.filter((p) => p.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedList)); 
    return updatedList;
  } catch (err) {
    console.log(err);
  }
  
};
