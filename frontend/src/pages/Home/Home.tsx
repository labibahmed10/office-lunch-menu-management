import MenuCard from "../../components/FoodMenu/MenuCard";

const Home = () => {
  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 place-items-center w-full h-full gap-10 my-10">
      {Array(10)
        .fill(1, 4)
        .map((menu, i) => (
          <MenuCard key={i} />
        ))}
    </section>
  );
};

export default Home;
