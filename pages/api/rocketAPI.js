import {
  useQuery,
  gql
} from "@apollo/client";
import { Box } from "@mui/system";

const EXCHANGE_RATES = gql`
  query {
    rockets {
      name
      mass {
        kg
      }
      company
      cost_per_launch
    }
  }
  
`;
export default function ExchangeRates() {

  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.rockets.map(({ name, company,cost_per_launch }) => (

<Box
component="span"
sx={{
  display: "inline-block",
  p: 1,
  m: 1,
  bgcolor: (theme) =>
    theme.palette.mode === "dark" ? "#101010" : "#fff",
  color: (theme) =>
    theme.palette.mode === "dark" ? "grey.300" : "grey.800",
  borderRadius: 4,
  fontSize: "0.875rem",
  fontWeight: "700",
  backgroundColor: "#eeede7",
}}
>
<div key={name}>
      <p>
        {name}<br />{company}<br />{cost_per_launch}
      </p>
    </div>
</Box>
  ))
}