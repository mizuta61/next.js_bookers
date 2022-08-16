import CreateForm from "../../components/CreateForm";
import IndexTable from "../../components/IndexTable";
import Typography from "@mui/material/Typography";

const BookList = () => {
  return (
    <>
      <Typography component="h4" variant="h4" align="center" marginTop="15px" fontWeight="fontWeightBold">
        CreateBook
      </Typography>

      <CreateForm />

      <Typography component="h4" variant="h4" align="center" fontWeight="fontWeightBold">
        BookList
      </Typography>
      <IndexTable />
    </>
  );
};
export default BookList;
