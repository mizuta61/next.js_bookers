import Link from "next/link";
import { useRouter } from "next/router";
import UpdateForm from "../../../components/UpdateForm";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Edit = () => {
  const router = useRouter();
  const bookId = router.query.id;
  const [book, setBook] = useState(null);
  useEffect(() => {
    if (!bookId) return;
    fetch(`http://localhost:3001/books/${bookId}`)
      .then((res) => res.json())
      .then((book) => setBook(book));
  }, [bookId]);

  return (
    <>
      <Typography
        component="h4"
        variant="h4"
        align="center"
        margin="15px 0"
        fontWeight="fontWeightBold"
      >
        EditingBook
      </Typography>
      <Link href="/books">
        <Typography
          component="h5"
          variant="h5"
          align="center"
          marginBottom="15px"
          fontWeight="fontWeightBold"
        >
          <Box component="a">Back</Box>
        </Typography>
      </Link>
      {book && <UpdateForm book={book} />}
    </>
  );
};
export default Edit;
