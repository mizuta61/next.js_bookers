import axios from "axios";
import { FC, useState } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

type props = {
  book: Book
}
type Book = {
  id: number
  title: string
  body: string
  created_at: string 
  updated_at: string
}

export default function UpdateForm(props) {
  console.log(props);
  const [book, setBook] = useState({title: props.book.title, body: props.book.body});
  const handleChange = (input) => e => {
    setBook( book => { return {...book, [input] : e.target.value} }); 
  }

  const updateBook = async () => {
    await axios.patch(`http://localhost:3001/books/${props.book.id}`, {book});
  }

  return (
    <Grid container>
      <Grid item xs display="flex" justifyContent="center" alignItems="center">
        <Box component="form" sx={{ width: "30%" }} onSubmit={updateBook}>
          <TextField
            sx={{ marginBottom: "5px", width: "100%" }}
            type="text"
            value={value.title}
            name="title"
            onChange={handleChange}
            variant="standard"
            label="TitleUpdate"
          />
          <br />
          <TextField
            sx={{ marginBottom: "5px", width: "100%" }}
            type="text"
            value={value.body}
            name="body"
            onChange={handleChange}
            variant="standard"
            label="BodyUpdate"
          />
          <br />
          <Button
            sx={{ marginBottom: "15px", width: "100%" }}
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={<UpdateIcon />}
          >
            Update
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default UpdateForm;