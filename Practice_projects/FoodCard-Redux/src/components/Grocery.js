const Grocery = () => {
  return (
    <div>
      <h1>
        Our Grocery online store,and we have a lot of child component inside
        this web page!!
      </h1>
      <h1>Welcome to Grocery Page</h1>
      <h1 className="font-bold text-3xl p-4 m-4">Grocery Page</h1>
      <form>
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="message"
        />
        <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Select According to your Choice
        </button>
      </form>
    </div>
  );
};

export default Grocery;
