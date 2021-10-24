const currency = {
  id: "curr1",
  code: "USD",
  prefix: "$",
  suffix: "",
};

const categoryMobile = {
  id: "cat1",
  name: "Mobile phones",
  code: "mobile",
};

const categoryFashion = {
  id: "cat2",
  name: "Fashion",
  code: "fashion",
};

const categorySoftware = {
  id: "cat3",
  code: "software",
};

const products = [
  {
    id: "prod1",
    name: "iPhone 13",
    description:
      "The iPhone 13 is the successor to Apple's best selling iPhone 12, and it improves upon a successful formula: $800 price for a flagship processor and a 6.1-inch screen size that is not too large, nor too small. The iPhone 13 brings a new Apple A15 Bionic chip and improvements to the dual camera setup consisting of a wide and ultra-wide camera.",
    price: 800,
    currency,
    imgPath: "images/Apple-iPhone-13.webp",
    category: categoryMobile,
    battery: 3227,
    cpu: "Apple A15 Bionic",
    ram: "4",
    storage: "128"
  },
  {
    id: "prod11",
    name: "iPhone 13",
    description:
      "The iPhone 13 is the successor to Apple's best selling iPhone 12, and it improves upon a successful formula: $800 price for a flagship processor and a 6.1-inch screen size that is not too large, nor too small. The iPhone 13 brings a new Apple A15 Bionic chip and improvements to the dual camera setup consisting of a wide and ultra-wide camera.",
    price: 800,
    currency,
    imgPath: "images/Apple-iPhone-13.webp",
    category: categoryMobile,
    battery: 3227,
    cpu: "Apple A15 Bionic",
    ram: "4",
    storage: "128"
  },
  {
    id: "prod2",
    name: "Samsung Galaxy S21",
    description:
      "The Samsung Galaxy S21 specs are top-notch including a Snapdragon 888 chipset, 5G capability, 8GB RAM coupled with 128/256GB storage, and a 4000mAh battery. The phone sports a 6.2-inch Dynamic AMOLED display with an adaptive 120Hz refresh rate. In the camera department, a triple-sensor setup is presented. The Samsung Galaxy S21 price starts at $800 for the base 128GB model.",
    price: 699,
    currency,
    imgPath: "images/Samsung-Galaxy-S21-Ultra.webp",
    category: categoryMobile,
    battery: 4000,
    cpu: "Snapdragon 888",
    ram: "8",
    storage: "128"
  },
  {
    id: "prod21",
    name: "Samsung Galaxy S21",
    description:
      "The Samsung Galaxy S21 specs are top-notch including a Snapdragon 888 chipset, 5G capability, 8GB RAM coupled with 128/256GB storage, and a 4000mAh battery. The phone sports a 6.2-inch Dynamic AMOLED display with an adaptive 120Hz refresh rate. In the camera department, a triple-sensor setup is presented. The Samsung Galaxy S21 price starts at $800 for the base 128GB model.",
    price: 699,
    currency,
    imgPath: "images/Samsung-Galaxy-S21-Ultra.webp",
    category: categoryMobile,
    battery: 4000,
    cpu: "Snapdragon 888",
    ram: "8",
    storage: "128"
  },
  {
    id: "prod3",
    name: "BikerPrincess jacket",
    description:
      "FREAKY NATION Преходно яке 'BikerPrincess' в черно",
    price: 289.90,
    currency,
    imgPath: "images/fe45b8cfd395e3cb23d668e4babe63ba.webp",
    category: categoryFashion,
    size: "M",
    color: "Black"
  },
  {
    id: "prod4",
    name: "AF 6IN Premium Boot",
    description:
      "TIMBERLAND Боти с връзки 'AF 6IN Premium Boot' в черно",
    price: 379.90,
    currency,
    imgPath: "images/74cc5e3c9a7be52bf9fff913a0861d5a.webp",
    category: categoryFashion,
    size: 42,
    color: "Black"
  },
  {
    id: "prod5",
    name: "Ubuntu",
    description:
      "Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software.",
    price: 0,
    currency,
    imgPath: "images/logo-ubuntu_st_no®-black_orange-hex.png",
    category: categorySoftware,
    version: "21.10",
    author: "Canonical Ltd.",
    license: "Free software"
  },
  {
    id: "prod5",
    name: "Ubuntu",
    description:
      "Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software.",
    price: 0,
    currency,
    imgPath: "images/logo-ubuntu_st_no®-black_orange-hex.png",
    category: categorySoftware,
    version: "21.10",
    author: "Canonical Ltd.",
    license: "Free software"
  },
  {
    id: "prod5",
    name: "Ubuntu",
    description:
      "Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software.",
    price: 0,
    currency,
    imgPath: "images/logo-ubuntu_st_no®-black_orange-hex.png",
    category: categorySoftware,
    version: "21.10",
    author: "Canonical Ltd.",
    license: "Free software"
  },
  {
    id: "prod5",
    name: "Ubuntu",
    description:
      "Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software.",
    price: 0,
    currency,
    imgPath: "images/logo-ubuntu_st_no®-black_orange-hex.png",
    category: categorySoftware,
    version: "21.10",
    author: "Canonical Ltd.",
    license: "Free software"
  }
];

export default products;
