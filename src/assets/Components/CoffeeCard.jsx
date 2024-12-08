const CoffeeCard = ({ coffee = {} }) => {
    const { name, quantity, supplier, test, category, details, photo } = coffee;

    

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={photo} alt="Coffee" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Quantity: {quantity}</p>
                <p>Supplier: {supplier}</p>
                <p>Test: {test}</p>
                <div className="card-actions justify-end">
                <div className="btn-group btn-group-vertical space-x-2 lg:btn-group-horizontal">
  <button className="btn btn-active">Button</button>
  <button className="btn">Button</button>
  <button className="btn">Button</button>
</div>
                </div>
            </div>
        </div>
    );
};




export default CoffeeCard;