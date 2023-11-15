import { Grid } from "@mui/material";
import style from './style'
import NavBar from "./components/NavBar";
import FormContainer1 from "./components/FormContainer1";
import FormContainer2 from "./components/FormContainer2";


function App() {
  return (
    <>
    <Grid sx={style.mainContainer}>
      <NavBar />
      <FormContainer1 />
      <FormContainer2 />
    </Grid>
    </>
  );
}

export default App;
