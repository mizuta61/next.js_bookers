import Link from "next/link";
import { useRouter } from "next/router";
import UpdateForm from "../../../components/UpdateForm";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

const Edit = () => {
  const router = useRouter();
  const bookId = router.query.id;
  const [b, setB] = useState(null);
  useEffect(() => {
    if (!bookId) return;
    fetch(`http://localhost:3001/books/${bookId}`)
      .then((response) => response.json())
      .then((b) => setB(b));
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
          <a>Back</a>
        </Typography>
      </Link>
      {b && <UpdateForm book={b} />}
    </>
  );
};
export default Edit;
