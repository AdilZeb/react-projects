import Image from "next/image";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-yellow-200">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <h1 className="text-4xl text-yellow-500 text-center font-thin ">
      <div className="w-6 h-[2px] bg-yellow-500 inline-block "> </div>Fast React
      Pizza Co.
    </h1>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const pizzaNum = pizzaData.length;
  return (
    <main className=" h-auto md:h-[80vh] gap-4 flex flex-col justify-center items-center">
      <h2 className="my-3 text-2xl inline-block text-center border-t-2 border-b-2 border-black">
        Our Menu
      </h2>
      {pizzaNum > 0 ? (
        <ul
          className={`w-full h-full gap-y-4 md:gap-y-0 mx-auto grid grid-cols-1 md:grid-cols-2 `}
        >
          {pizzaData.map((pizza) => (
            <Pizzas pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p className="text-3xl">We are currently Working On Our Menu</p>
      )}
    </main>
  );
}
function Pizzas({ pizza }: any) {
  return (
    <li className={`flex  items-center ${pizza.soldOut && "opacity-50"} `}>
      <Image
        src={`/${pizza.photoName}`}
        width={100}
        height={100}
        alt="pizza photo"
      ></Image>
      <div className="ml-4">
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="flex justify-center items-center">
      {isOpen && (
        <div className="flex flex-col justify-center items-center p-2">
          <p>
            we are currently open {openHour}:00 - {closeHour}:00, come and visit
            us
          </p>
          <button className="bg-yellow-500 px-4 py-2 text-white">Order</button>
        </div>
      )}
    </footer>
  );
}
