
import ProgressCard from "../components/dashboardComponents/ProgressCard";
import { Divider } from "@mui/material";
import ExchangeRates from "./api/rocketAPI";
export default function IndexPage() {
  return (
    <>
      <div>
        <ProgressCard />
      </div>
      <br />
      <br />
      <Divider />
      <h2>Pass a tech Stack</h2>
      <p>Become eligible for Jobs by passing the tests below</p>
      <h3>List of SpaceX Rockets</h3>
      <ExchangeRates />
    </>
  );
}
