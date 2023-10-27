import React,{useEffect,useState} from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
// import Cart from "./Cart";
const Home = () => {

  const [search,setSearch]=useState('')
  const [food,setFoodItem]=useState([])//map function we can use only array ,not object(for in loop)
  const [category,setCategory]=useState([])

 
const fetchItems=async()=>{
  let Fitems=await fetch('http://localhost:8000/api/getitems')
  Fitems=await Fitems.json()
  console.log(Fitems)
  setFoodItem(Fitems.data)
 }

 const fetchCategory=async()=>{
  let Fcategory=await fetch('http://localhost:8000/api/getcategory')
  Fcategory=await Fcategory.json()
  console.log(Fcategory)
  setCategory(Fcategory.data)
 }
  
  
  
  useEffect(() => {
      fetchItems()
      fetchCategory()
   
   }, [])
  

  return (
    <div >
      <div><Navbar /></div>
      {/* <div><Cart/></div> */}

      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ objectFit: "contain" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center ">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              {/* <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button> */}
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900×700/?burger"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?chicken"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?muttun"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>

       <div className="container">
        {
          !category ==[]? category.map((data)=>{
            return (
              <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              {!food== []? food.filter((item)=>
                   item.CategoryName==data.CategoryName && item.name.toLowerCase().includes(search))
                   .map((filterItem)=>{
                    return (
                      <div key={filterItem._id} className="col-12 col-md-6 col-lg-3">
                        <Card
                        foodItem={filterItem}
                        options={filterItem.options[0]}
                        
                         >
                  

                        </Card>
                      </div>
                    )
                   }):<div>No Such Data Found</div> }
              </div>
            )
          }):<div>=============</div>
        }
        </div>

        <div><Footer /></div>
      </div>
  );
};

export default Home;
