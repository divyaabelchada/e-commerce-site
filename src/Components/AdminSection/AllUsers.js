import React, { useEffect, useState } from "react";

//firebase
import { db, auth, provider } from "../../firebase";

//material ui
import { DataGrid } from "@material-ui/data-grid";
import { Box, CircularProgress, Typography } from "@material-ui/core";

function AllUsers() {
  const [users, setUsers] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("users").onSnapshot((snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          lName: doc.data().lName,
          fName: doc.data().fName,
          email: doc.data().email,
          contact: doc.data().contact,
        }))
      );
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 170, resizable: true },
    {
      field: "fName",
      headerName: "First Name",
      width: 170,
    },
    {
      field: "lName",
      headerName: "Last Name",
      width: 170,
    },
    {
      field: "contact",
      headerName: "Contact",
      width: 170,
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
  ];

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center", margin: "5rem" }}>
          <CircularProgress />
        </div>
      ) : (
        <div style={{ height: "95vh", width: "100%" }}>
          {!users ? (
            <div>
              <Typography>No users yet : (</Typography>{" "}
            </div>
          ) : (
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={5}
              checkboxSelection
            />
          )}
        </div>
      )}
    </div>
  );
}

export default AllUsers;
