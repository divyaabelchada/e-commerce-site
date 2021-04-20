import { Button, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import { db, auth, provider } from "../../firebase";

function AllOrders() {
  const [orders, setOrders] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("orders").onSnapshot((snapshot) => {
      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          order: doc.data(),
        }))
      );
    });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  console.log(orders);

  //getting details of products using product ID from order

  const [orderProducts, setOrderProducts] = useState(null);

  //   const getOrderDetails = (id) => {
  //     console.log(id);

  //     const doc = await ;
  //     if (!doc.exists) {
  //       console.log("No such document!");
  //     } else if (orderProducts === null) {
  //       setOrderProducts(doc.data());
  //     } else {
  //       setOrderProducts((history) => [...history, doc.data()]);
  //     }
  //   };

  // const getOrderDetails = (id) => {
  //   db.collection("products")
  //     .doc(id)
  //     .get()
  //     .then((doc) => {
  //       if (!doc.exists) {
  //         //console.log("Document data:", doc.data());
  //         console.log("No such document!");
  //       } else if (orderProducts === null) {
  //         setOrderProducts([doc.data()]);
  //         // doc.data() will be undefined in this case
  //         //console.log("No such document!");  setImages([...images, files[0]]);
  //       } else {
  //         setOrderProducts([...orderProducts, doc.data()]);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error getting document:", error);
  //     });
  // };

  console.log(orderProducts);

  return (
    <div>
      <p>orders appear here</p>
      <Grid container alignItems="flex-start" spacing={1}></Grid>
    </div>
  );
}

export default AllOrders;

// <Grid item xs={6} md={3}>
//           {!orders ? (
//             <div>No orders</div>
//           ) : (
//             orders.map(({ order, id }) => (
//               <div>
//                 <p>{id} </p>
//                 <p> {order.date} </p>
//                 <div>
//                   {" "}
//                   {order.products.map((value) => (
//                     <div>
//                       {" "}
//                       <p>hi</p>
//                       {value.productID} <br />
//                       {value.qty}
//                       {/* <Button
//                         variant="outlined"
//                         onClick={() => getOrderDetails(value.productID)}
//                       >
//                         Get details
//                       </Button> */}
//                     </div>
//                   ))}{" "}
//                 </div>
//               </div>
//             ))
//           )}
//         </Grid>
