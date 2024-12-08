import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;

        const name =form.name.value;
        const quantity =form.quantity.value;
        const supplier =form.supplier.value;
        const test =form.test.value;
        const category =form.category.value;
        const details =form.details.value;
        const photo =form.photo.value;

        const newCoffee = {name,quantity,supplier,test,category,details,photo}
         console.log(newCoffee);

        //  send data to the server
        fetch('http://localhost:5000/coffee',{
            method:'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })

        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                
                // this a toast or modal
                Swal.fire({
                    title: 'success!',
                    text: 'user add successfully',
                    icon: 'success',
                    confirmButtonText: 'Well done JHORNA'
                  })
            }
        })
    }
    return (
        <div>
            <div className="text-center bg-green-100 sticky space-y-3 p-8">
                <h1 className="font-extrabold">YOUR favorite coffee is here </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, ea.</p>
            </div>
            
           <form className="bg-stone-500 flex flex-col p-40 text-black" onSubmit={handleAddCoffee}>
            {/* 1st row */}
            <div className="px-10 gap-4 md:flex">
           <div className="form-control md:w-1/2">
         <label className="label">
          <span className="label-text">Coffee Name</span>
         </label>
        <label className="input-group">
      <span>Name</span>
      <br />
      <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
       </label>
        </div>
           <div className="form-control md:w-1/2">
         <label className="label">
          <span className="label-text">Available Quantity</span>
         </label>
        <label className="input-group">
      <span>Quantity</span>
      <br />
      <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
       </label>
        </div>
        </div>
        {/* 2nd row */}
            <div className="px-10 gap-4 md:flex">
           <div className="form-control md:w-1/2">
         <label className="label">
          <span className="label-text">Supplier Name</span>
         </label>
        <label className="input-group">
      <span>Name</span>
      <br />
      <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
       </label>
        </div>
       
           <div className="form-control md:w-1/2">
         <label className="label">
          <span className="label-text">Test</span>
         </label>
        <label className="input-group">
      <span>Quantity</span>
      <br />
      <input type="text" name="test" placeholder="Test" className="input input-bordered w-full" />
       </label>
        </div>
        </div>
        {/* 3rd row */}
            <div className="px-10 gap-4 md:flex">
           <div className="form-control md:w-1/2">
         <label className="label">
          <span className="label-text">Category</span>
         </label>
        <label className="input-group">
      <span>Name</span>
      <br />
      <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
       </label>
        </div>
           <div className="form-control md:w-1/2">
         <label className="label">
          <span className="label-text">DEtails</span>
         </label>
        <label className="input-group">
      <span>details</span>
      <br />
      <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
       </label>
        </div>
       
        </div>
         {/* 4th row */}
         <div className="form-control w-full">
         <label className="label">
          <span className="label-text">photo url</span>
         </label>
        <label className="input-group">
     
      <br />
      <input type="text" name="photo" placeholder="photo" className="input input-bordered  mb-6 w-full" />
       </label>
        </div>

        <input type="submit"value="Add Coffee"className="btn btn-block"/>
           </form>
        </div>
    );
};

export default AddCoffee;