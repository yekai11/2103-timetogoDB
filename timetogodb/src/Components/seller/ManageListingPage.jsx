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
import Header from "../Header/HeaderComponent";
import FooterSection from "../Homepage/FooterSection";

export default function ManageListingPage() {
  const [listingInfo, setListingInfo] = useState([]);
  const account_id = window.localStorage.getItem("accountID");

  useEffect(() => {
    // console.log(account_id);
    fetch(`http://localhost:5000/seller/oneListing/${account_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((json_result) => {
        if (json_result.length != 0) {
          setListingInfo(json_result);
        }
      });
    });
  }, []);

  const handleEdit = (account_id) => {
    window.location.href = `modifyListing/${account_id}`;
  };

  const handleDelete = () => {
    fetch(`http://localhost:5000/seller/deleteListing`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listing_id: listingInfo.listing_id,
      }),
    }).then((result) => {
      console.log(result);
      window.location.reload();
    });
  };
  window.localStorage.setItem("listing_id", listingInfo.listing_id);
  console.log(listingInfo);

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
          My Listing
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
                  Listing Type
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", fontWeight: "bold", color: "white" }}
                >
                  {" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{listingInfo.area}</TableCell>
                <TableCell align="center">{listingInfo.street}</TableCell>
                <TableCell align="center">{listingInfo.num_of_rooms}</TableCell>
                <TableCell align="center">{listingInfo.storey_range}</TableCell>
                <TableCell align="center">
                  {listingInfo.floor_area_sqm}
                </TableCell>
                <TableCell align="center">{listingInfo.price}</TableCell>
                <TableCell align="center">{listingInfo.listing_type}</TableCell>

                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(account_id)}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <FooterSection />
    </div>
  );
}
