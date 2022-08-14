import axios from 'axios';
import React, { useState } from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function CreateForm() {
  const [book, setBook] = useState({title: "", body: ""});

  const handleChange = (input) => e => {
    setBook({...book, [input] : e.target.value});
  }

  const createBook = async() => {
    await axios.post("http://localhost:3001/books", {book})
  }

  return (
    <>
    <form onSubmit={createBook}>
      <Input type="text" value={book.title} placeholder="Title" onChange={handleChange('title')} />
      <br></br>
      <Input type="text" value={book.body} placeholder="Body" onChange={handleChange('body')} />
      <br></br>
      <Button
            type="submit"
            variant="contained"
            color="secondary"
            size ="small"
            startIcon={<MenuBookIcon />}
      >
        Create
      </Button>
    </form>
    </>
  )
}