import axios from "axios";
import { FC, useState } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

type Props = {
  book: Book;
};
type Book = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
};

const UpdateForm: FC<Props> = ({ book }) => {
  const { title, body } = book;
  const [value, setValue] = useState({ title, body });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((value) => {
      return { ...value, [e.target.name]: e.target.value };
    });
  };

  const updateBook = async () => {
    await axios.patch(`http://localhost:3001/books/${book.id}`, {
      book: value,
    });
  };

  return (
    <form onSubmit={updateBook}>
      <Input
        type="text"
        value={value.title}
        placeholder="TitleUpdate"
        name="title"
        onChange={handleChange}
      />
      <br></br>
      <Input
        type="text"
        value={value.body}
        placeholder="BodyUpdate"
        name="body"
        onChange={handleChange}
      />
      <br></br>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<UpdateIcon />}
      >
        Update
      </Button>
    </form>
  );
};
export default UpdateForm;
