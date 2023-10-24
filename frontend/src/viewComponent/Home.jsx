import React,{useEffect,useState} from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
 import Card from "../Components/Card";
import Carsal from "../Components/Carsal";

const Home = () => {

  // const [search,setSearch]=useState('')
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

      <div><Carsal/></div>

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
                   item.CategoryName==data.CategoryName)
                   .map((filterItem)=>{
                    return (
                      <div key={filterItem._id} className="col-12 col-md-6 col-lg-3">
                        <Card
                        foodName={filterItem.name}
                        options={filterItem.options[0]}
                        imgSrc={filterItem.img}
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
