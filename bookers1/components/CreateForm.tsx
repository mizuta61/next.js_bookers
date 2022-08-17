import axios from "axios";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


  const handleChange = (input) => e => {
    setBook({...book, [input] : e.target.value});
  }

  const createBook = async() => {
    await axios.post("http://localhost:3001/books", {book})
  }

  return (
    <>

      <Grid container>
        <Grid
          item
          xs
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box component="form" sx={{ width: "30%" }} onSubmit={createBook}>
            <TextField
              sx={{ marginBottom: "5px", width: "100%" }}
              type="text"
              value={book.title}
              name="title"
              onChange={handleChange}
              variant="standard"
              label="Title"
            />
            <br />
            <TextField
              sx={{ marginBottom: "5px", width: "100%" }}
              type="text"
              value={book.body}
              name="body"
              onChange={handleChange}
              variant="standard"
              label="Body"
            />
            <br />
            <Button
              sx={{ marginBottom: "15px", width: "100%" }}
              type="submit"
              variant="contained"
              color="secondary"
              startIcon={<MenuBookIcon />}
            >
              Create
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default CreateForm;
