import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Link from "next/link";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type Book = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
};

const IndexTable = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const deleteBook = async (id: number) => {
    await axios
      .delete(`http://localhost:3001/books/${id}`)
      .catch(() => console.log("削除失敗"));
    console.log("削除成功");
    setBooks((books) => books.filter((book: Book) => book.id !== id));
  };

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then(res => res.json())
      .then(books => setBooks(books));
  }, []);

  const handleShowDetails = (book: Book | null) => setSelectedBook(book);

  return (
    <>
      <TableContainer>
        <Table sx={{ maxWidth: 650 }} align="center">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
              <TableCell colSpan={3}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book: Book, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.body}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<VisibilityIcon />}
                      onClick={() => handleShowDetails(book)}
                    >
                      SHOW
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      startIcon={<EditIcon />}
                    >
                      <Link href={`/books/edit/${book.id}`}>
                        <a>EDIT</a>
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteBook(book.id)}
                    >
                      DESTROY
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedBook && (
        <div id="overlay">
          <div id="book-details">
            <button onClick={() => handleShowDetails(null)}>Close ✖️</button>
            <p>ID: {selectedBook.id}</p>
            <p>Title: {selectedBook.title}</p>
            <p>Body: {selectedBook.body}</p>
            <p>
              Created At:{" "}
              {DateTime.fromISO(selectedBook.created_at, {
                zone: "Asia/Tokyo",
              }).toLocaleString(DateTime.DATE_MED)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default IndexTable;
