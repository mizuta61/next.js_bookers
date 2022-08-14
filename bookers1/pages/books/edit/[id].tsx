import Link from 'next/link'
import { useRouter } from "next/router"
import UpdateForm from "../../../components/UpdateForm"
import React, { useEffect, useState } from 'react';

export default function Edit() {
  const router = useRouter();
  const bookId = router.query;
  const [ b, setB ] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3001/books/${bookId.id}`)
      .then(response => response.json())
      .then(b => setB(b))
  }, [])

  return (
    <>
      <h1>Editing Book</h1>
      <Link href="/books">
        <h3><a>Back</a></h3>
      </Link>
      {b && <UpdateForm book={b}/>}
    </>
  )
}