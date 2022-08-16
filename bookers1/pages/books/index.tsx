import CreateForm from "../../components/CreateForm";
import IndexTable from "../../components/IndexTable";

const BookList = () => {
  return (
    <>
      <h1>CreateBook</h1>
      <CreateForm />
      <h1>Book List</h1>
      <IndexTable />
    </>
  );
}
export default BookList;