import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UpdateIcon from '@mui/icons-material/Update';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

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
    <form onSubmit={updateBook}>
      <Input type="text" value={book.title} placeholder="TitleUpdate" onChange={handleChange('title')} />
      <br></br>
      <Input type="text" value={book.body} placeholder="BodyUpdate" onChange={handleChange('body')} />
      <br></br>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        size ="small"
        startIcon={<UpdateIcon />}
      >
        Update
      </Button>
    </form>
  )
}