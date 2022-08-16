import axios from "axios";
import React, { useState } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import MenuBookIcon from "@mui/icons-material/MenuBook";

type Book = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
};

const CreateForm = () => {
  const [book, setBook] = useState({ title: "", body: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const createBook = async () => {
    await axios.post("http://localhost:3001/books", { book });
  };

  return (
    <>
      <form onSubmit={createBook}>
        <Input
          type="text"
          value={book.title}
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <br></br>
        <Input
          type="text"
          value={book.body}
          placeholder="Body"
          name="body"
          onChange={handleChange}
        />
        <br></br>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<MenuBookIcon />}
        >
          Create
        </Button>
      </form>
    </>
  );
}
export default CreateForm;