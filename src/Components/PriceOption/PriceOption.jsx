import Feature from "../Feature/Feature";

const PriceOption = ({option, feature}) => {
    const {name, price, features} = option;
  return (
    <div className="bg-blue-500 rounded-lg p-4 flex flex-col mt-10">
        <h2 className="text-center">
            
              <span className="text-7xl font-extrabold">{price}</span>
            <span className="text-3xl">/month</span>
            
            
        </h2>
        <h4 className="text-3xl text-center my-8">{name}</h4>
        <div className="pl-4 flex-grow">
          {
          features.map((feature, idx) => <Feature key={idx} feature={feature} />)
        }
        </div>
        <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900">Buy Now</button>

      
      
    </div>
  );
};

export default PriceOption;