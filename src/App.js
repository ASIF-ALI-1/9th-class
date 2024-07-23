// import "./App.css"



import React from 'react'

function App() {

  let products = [
    {
      id: 1,
      title: "Large Burger",
      detail: "One large burger + one cold drink",
      price: "300",
      img: "https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png"
    },
    {
      id: 2,
      title: "Large Burger",
      detail: "One large burger + one cold drink",
      price: "300",
      img: "https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png"
    },
    {
      id: 3,
      title: "Large Burger",
      detail: "One large burger + one cold drink",
      price: "300",
      img: "https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png"
    },
    {
      id: 4,
      title: "Large Burger",
      detail: "One large burger + one cold drink",
      price: "300",
      img: "https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png"
    },
    {
      id: 5,
      title: "Large Burger",
      detail: "One large burger + one cold drink",
      price: "300",
      img: "https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png"
    },

  ]




  return (
    <div className="container  mt-5">
      <div class="row row-cols-1 row-cols-md-5 g-4">
       {
        products.map(product => (
           <div class="col" key={product.id}>
          <div className="card" >
            <img src="https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png" className="rounded-circle" alt={products.title}></img>
            <div className="card-body">
              <h5 className="card-title">{products.title}</h5>
              <p className="card-text">{products.detail}</p>
              <a href="https://www.kfcpakistan.com/menu#EverydayValue" className="btn btn-primary">Add to cart </a>
            </div>
          </div>
        </div>
        ))
       }
       
      </div>
    </div>
  )
}

export default App










// import React from 'react'    

// function App() {
//   let product = 
//     {
//       id: 1,
//       title: "Large Burger",
//       detail: "One large burger + one cold drink",
//       price: "300",
//       img: "https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png"
//     }




//   return (

//       <div className="container  mt-5 mr-25">
//       <div className="card" style={{ width: "15rem" }}>
//         <img src="https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png" className="rounded-circle" alt={product.title}></img>
//         <div className="card-body">
//           <h5 className="card-title">{product.title}</h5>
//           <p className="card-text">{product.detail}</p>
//           <a href="https://www.kfcpakistan.com/menu#EverydayValue" className="btn btn-primary">Add to cart </a>
//         </div>
//       </div>
//       </div>

//   )
// }

//  export default App




//*how  to add map funtion in accordians
// import React from 'react'

// function App() {
//   let cities = [
//     {
//       id: 1,
//       title: "Lahore",
//       detail: "Lahore came to fame with Islam in South Asia and started being called as the 'Gardens of the  Mughals' or 'City of Gardens', after the significant rich heritage of the Mughal Empire. Lahore has always been a seat of learning and knowledge. Sufism and provisional spirituality became its primary discipline.",
//     },
//     {
//       id: 2,
//       title: "Karachi",
//       detail: "Situated on the Arabian Sea, Karachi serves as a transport hub, and is home to Pakistan's two largest seaports, the Port of Karachi and Port Bin Qasim, as well as the busiest airport in Pakistan."
//     },
//     {
//       id: 3,
//       title: "Multan",
//       detail: "Multan is known as the 'City of Pirs and Shrines', and is a prosperous city of bazaars, mosques and superbly designed tombs. The Multan International Airport connects flights to major cities in Pakistan and other International countries."
//     },
//   ]

//   return (


//     <div className="accordion" id="accordionExample">{

//       cities.map(city => {
//         return(
//           <div className="accordion-item" key={city.id}>
//         <h2 className="accordion-header">
//           <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#" + city.title} aria-expanded="true" aria-controls="collapseOne">
//            {city.title}
//           </button>
//         </h2>
//         <div id={city.title} 
//         className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//           <div className="accordion-body">
//            {city.detail}
//           </div>
//         </div>
//       </div>
//         )
//       })
//      }


//     </div>
//   )
// }
// export default App













//* <div className="accordion"
//   id="accordionExample" > {
//     cities.map(city => {
//       return (
//         <div className="accordion-item"
//         key={city.id}>
//           <h2 className="accordion-header">
//               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#" + city.title} aria-expanded="true" aria-controls="collapseOne">
//         {city.title}
//             </button>
//           </h2>
//           <div id={city.title} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//             <div className="accordion-body">
//               {city.detail}

//             </div>
//           </div>
//         </div>
//       )
//     })
//   }


//   </div>
//   )
// }

// export default App














//* import React from 'react'npm 

//* funtion App  () {


// let cities = ["Lahore", "Karachi", "Islamabad", "Multan", "Chichwatni","Karachi" ,"jsdfalk"];


// return (

//   <div>

{/* <ul className="list-group">{
          cities.map(city => <li className="list-group-item">{city}
          </li>)
        }
      </ul> */}

{/*if the data is same like same names any two perosns so we use key and index as a verify diff between them*/ }



{/* <ul className="list-group">
       {
         cities.map((city , index) => <li key={index} className="list-group-item">  {city}  </li>)
       }
       </ul> */}

{/* <ul className="list-group">
        {
          cities.map (city =>  <li className="list-group-item"> {city} </li>)
        }
        </ul> */}




//     </div>

//   )
// }

// export default App
