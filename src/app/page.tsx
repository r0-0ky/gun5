import { Rating } from "@mui/material";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Grid2>
        <Rating />
      </Grid2>
    </Container>
  );
}
