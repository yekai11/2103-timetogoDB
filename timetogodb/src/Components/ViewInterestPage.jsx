import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Header from "../Components/Header/HeaderComponent";
import FooterSection from "../Components/Homepage/FooterSection";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export function ViewInterestPage() {
  const account_id = window.localStorage.getItem("accountID");

  const [listingInfo, setListingInfo] = useState([]);
  useEffect(() => {
    console.log(account_id);
    fetch(`http://localhost:5000/interest/accountInterest/11`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((json_result) => {
        setListingInfo(json_result);
      });
    });
  }, []);

  const handleDelete = (listing_id) => {
    fetch(`http://localhost:5000/interest/deleteInterest`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account_id: account_id,
        listing_id: listing_id,
      }),
    }).then((result) => {
      console.log(result);
      window.location.reload();
    });
  };

  return (
    <div style={{ height: "100vh", width: "auto" }}>
      <Header />
      <Box
        sx={{
          height: "80vh",
          width: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          my: 2,
        }}
      >
        <Typography variant="h3" align="center">
          My Favourites
        </Typography>
        <TableContainer
          component={Paper}
          elevation={2}
          sx={{
            mt: 3,
            mb: 0,
            maxHeight: "70vh",
            overflowY: "scroll",
            width: "85%",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Location
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Address
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Num-Of-Rooms
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Storey-Range
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Floor-Area-Sqm
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  {""}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listingInfo.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.area}</TableCell>
                  <TableCell align="center">{row.street}</TableCell>
                  <TableCell align="center">{row.num_of_rooms}</TableCell>
                  <TableCell align="center">{row.storey_range}</TableCell>
                  <TableCell align="center">{row.floor_area_sqm}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>

                  <TableCell align="center">
                    {/* Button onClick={to delete an interest} */}
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(row.listing_id)}
                      color="secondary"
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <FooterSection />
    </div>
  );
}
