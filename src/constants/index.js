export const PRODUCTS = [
  {
    id: "Good-Source",
    name: "Good Source",
    desc: "Sweet Snacks",
    type: "Chocolates",
    price: {
      USD: 8,
    },
    image: require("@/assets/images/Product1.png"),
    color: "#FFEBED",
  },
  {
    id: "Unreal-Muffins",
    name: "Unreal Muffins",
    desc: "Sweet Snacks",
    type: "Chocolates",
    price: {
      USD: 5,
    },
    image: require("@/assets/images/Product2.png"),
    color: "#F5FFB1",
  },
  {
    id: "Perfect-Snacks",
    name: "Perfect Snacks",
    desc: "Perfect Snacks",
    type: "Chocolates",
    price: {
      USD: 8,
    },
    image: require("@/assets/images/Product3.png"),
    color: "#ECE1FF",
  },
  {
    id: "Smiths-Chips",
    name: "Smiths Chips",
    desc: "Delicious Chips",
    type: "Chips",
    price: {
      USD: 7,
    },
    image: require("@/assets/images/Product4.png"),
    color: "#FFEAC2",
  },
  {
    id: "Coconut-Chips",
    name: "Coconut Chips",
    desc: "Dang",
    type: "Chips",
    price: {
      USD: 6,
    },
    image: require("@/assets/images/Product5.png"),
    color: "#EAFCD7",
  },
  {
    id: "Dark-Russet",
    name: "Dark Russet",
    desc: "Delicious Chips",
    type: "Chips",
    price: {
      USD: 8,
    },
    image: require("@/assets/images/Product6.png"),
    color: "#F2E1D5",
  },
  {
    id: "Regular-Nature",
    name: "Regular Nature",
    desc: "Delicious Chips",
    type: "Chips",
    price: {
      USD: 6,
    },
    image: require("@/assets/images/Product7.png"),
    color: "#E8E9FF",
  },
  {
    id: "Twister-Chips",
    name: "Twister Chips",
    desc: "Delicious Chips",
    type: "Chips",
    price: {
      USD: 8,
    },
    image: require("@/assets/images/Product8.png"),
    color: "#FFEBED",
  },
  {
    id: "Deep-River",
    name: "Deep River",
    desc: "Delicious Chips",
    type: "Chips",
    price: {
      USD: 9,
    },
    image: require("@/assets/images/Product9.png"),
    color: "#DDCDFE",
  },
];

// export const CART = JSON.parse(localStorage.getItem("cart") || "[]");
export const CART = [];

export const filterBtn = [
  {
    name: "All",
    filter: "",
    active: true,
  },
  {
    name: "Choco",
    filter: "Chocolates",
    active: false,
    icon: require("@/assets/images/icon3.svg"),
  },
  {
    name: "Chips",
    filter: "Chips",
    active: false,
    icon: require("@/assets/images/icon1.svg"),
  },
];

export const PUBLIC_LAYOUT = "default";
