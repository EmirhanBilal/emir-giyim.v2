import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Checkout from "./routes/checkout/checkout.component";
import Hats from "./routes/shop/hats/hats.component";
import Jackets from "./routes/shop/jackets/jackets.component";
import Mens from "./routes/shop/mens/mens.component";
import Shop from "./routes/shop/shop.component";
import Sneakers from "./routes/shop/sneakers/sneakers.component";
import Womens from "./routes/shop/womens/womens.component";
import img1 from "./images/blackjacket.jpg";
import img2 from "./images/bluejean.jpg";
import img3 from "./images/greyjacket.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.png";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import img10 from "./images/10.jpeg";
import img11 from "./images/11.jpg";
import img12 from "./images/12.jpg";
import img13 from "./images/13.jpg";
import img14 from "./images/14.jpg";
import img15 from "./images/15.jpg";
import img16 from "./images/16.jpg";
import img17 from "./images/17.jpg";
import img18 from "./images/18.jpg";
import img19 from "./images/19.jpg";
import img20 from "./images/20.jpg";
import Login from "./routes/login/login";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Black Jean Shearling",
    type: "Jackets",
    img: img1,
    id: 1,
    price: 125,
  },
  { name: "Blue Jean Jacket", type: "Jackets", img: img2, id: 2, price: 90 },
  { name: "Grey Jean Jacket", type: "Jackets", img: img3, id: 3, price: 90 },
  { name: "Brown Shearling", type: "Jackets", img: img4, id: 4, price: 165 },
  { name: "Brown Brim", type: "Hats", img: img5, id: 5, price: 25 },
  { name: "Blue Beanie", type: "Hats", img: img6, id: 6, price: 18 },
  { name: "Brown Cowboy", type: "Hats", img: img7, id: 7, price: 35 },
  { name: "Grey Brim", type: "Hats", img: img8, id: 8, price: 25 },
  { name: "Adidas NMD", type: "Sneakers", img: img9, id: 9, price: 220 },
  { name: "Adidas Yeezy", type: "Sneakers", img: img10, id: 10, price: 280 },
  { name: "Black Converse", type: "Sneakers", img: img11, id: 11, price: 110 },
  {
    name: "Nike White AirForce",
    type: "Sneakers",
    img: img12,
    id: 12,
    price: 160,
  },
  { name: "Camo Down Vest", type: "Mens", img: img13, id: 13, price: 325 },
  { name: "Floral T-shirt", type: "Mens", img: img14, id: 14, price: 20 },
  {
    name: "Black & White Longsleeve",
    type: "Mens",
    img: img15,
    id: 15,
    price: 25,
  },
  { name: "Pink T-shirt", type: "Mens", img: img16, id: 16, price: 25 },
  { name: "Blue Tanktop", type: "Womens", img: img17, id: 17, price: 25 },
  { name: "Floral Blouse", type: "Womens", img: img18, id: 18, price: 20 },
  { name: "Floral Dress", type: "Womens", img: img19, id: 19, price: 80 },
  { name: "Red Dots Dress", type: "Womens", img: img20, id: 20, price: 80 },
];

const App = () => {
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [offlineUser, setOfflineUser] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const addUsers = (name, email, password) => {
    users.map((user) => {
      if (user.email === email) {
        alert("Bu mail kullanılmıştır");
      }
    });
    const newUsers = [...users, { name, email, password, cartProducts: [] }];
    setUsers(newUsers);
  };
  const handleLogin = (email, password) => {
    let isOk = users.find(
      (user) => email === user.email && user.password === password
    );
    if (isOk) {
      setCount(0);
      setLogin(true);
      navigate("/");
    } else {
      alert("Mail yada Şifre yanlış");
      return;
    }
    setCurrentUser(isOk);
  };
  const handleLogout = () => {
    setLogin(false);
    setCurrentUser({});
    setCartProducts(offlineUser);
  };
  useEffect(() => {
    if (currentUser.email) {
      setCartProducts(currentUser.cartProducts);
      let newUsers = users.find((user) => user.email === currentUser.email);
      newUsers.cartProducts = currentUser.cartProducts;
    }
  }, [currentUser]);
  useEffect(() => {
    if (login) {
      setCurrentUser((pre) => {
        return { ...pre, cartProducts };
      });
    }

    let total = 0;
    cartProducts.forEach((cartProduct) => {
      total += cartProduct.quantity;
    });
    setCount(total);
  }, [cartProducts]);
  const addProducts = (img, name, price, id) => {
    const isOk = cartProducts.find((product) => product.id === id);
    if (isOk) {
      isOk.quantity += quantity;
      setQuantity(1);
      setCurrentUser((pre) => {
        return { ...pre, cartProducts };
      });
      return;
    }
    const newCartProducts = [
      ...cartProducts,
      { img, name, price, id, quantity },
    ];
    if (!currentUser.email) {
      setOfflineUser(newCartProducts);
    }
    setCartProducts(newCartProducts);
  };
  const handleCount = () => {
    setCount((pre) => pre + 1);
  };
  const handleDecrease = (id) => {
    const isOk = cartProducts.find((product) => product.id === id);
    if (isOk.quantity - 1 >= 0) {
      isOk.quantity = isOk.quantity - 1;
      setCount((pre) => pre - 1);
    }
  };
  const handleIncrease = (id) => {
    const isOk = cartProducts.find((product) => product.id === id);
    isOk.quantity = isOk.quantity + 1;
    setCount((pre) => pre + 1);
  };
  const handleRemove = (id) => {
    const isOk = cartProducts.find((product) => product.id === id);
    setCount((pre) => pre - isOk.quantity);
    const newCartProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newCartProducts);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigation login={login} handleLogout={handleLogout} count={count} />
        }
      >
        <Route index element={<Home />} />
        <Route
          path="login"
          element={<Login addUsers={addUsers} handleLogin={handleLogin} />}
        />
        <Route
          path="checkout"
          element={
            <Checkout
              cartProducts={cartProducts}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              handleRemove={handleRemove}
            />
          }
        />
        <Route
          path="shop"
          element={
            <Shop
              products={products}
              addProducts={addProducts}
              handleCount={handleCount}
            />
          }
        />
        <Route
          path="/shop/hats"
          element={
            <Hats
              products={products}
              addProducts={addProducts}
              handleCount={handleCount}
            />
          }
        />
        <Route
          path="/shop/jackets"
          element={
            <Jackets
              products={products}
              addProducts={addProducts}
              handleCount={handleCount}
            />
          }
        />
        <Route
          path="/shop/sneakers"
          element={
            <Sneakers
              products={products}
              addProducts={addProducts}
              handleCount={handleCount}
            />
          }
        />
        <Route
          path="/shop/mens"
          element={
            <Mens
              products={products}
              addProducts={addProducts}
              handleCount={handleCount}
            />
          }
        />
        <Route
          path="/shop/womens"
          element={
            <Womens
              products={products}
              addProducts={addProducts}
              handleCount={handleCount}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
