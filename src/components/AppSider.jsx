import {
  Box,
  Card,
  Stack,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Skeleton,
} from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import { red, green } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { fetchCrypto, fetchAssets } from "../api.js";
import { percentDifference } from "../utils.js";

// const stackStyle = {
//   alignItems: "center",
//   justifyContent: "space-between",
//   color: green[500],
// };
const styleSkeleton = {
  height: "6rem",
};

export default function AppSider() {
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function preload() {
      setLoading(true);
      const { result } = await fetchCrypto();
      const assets = await fetchAssets();
      setAssets(
        assets.map((asset) => {
          const coin = result.find((c) => c.id === asset.id);
          return {
            grow: assets.price < coin.price,
            growPercent: percentDifference(asset.price, coin.price),
            totalAmount: asset.amount * coin.price,
            totalProfit: asset.amount * coin.price - asset.amount * asset.price,
            ...asset,
          };
        })
      );
      setCrypto(result);
      setLoading(false);
    }
    preload();
  }, []);

  if (loading) {
    return (
      <>
        <Stack spacing={2}>
          {
            for( let i = 0; i < 7; i++) {
              (<Skeleton variant="rounded" sx={styleSkeleton} />)
            }
          }
          
          <Skeleton variant="rounded" sx={styleSkeleton} />
          <Skeleton variant="rounded" sx={styleSkeleton} />
          <Skeleton variant="rounded" sx={styleSkeleton} />
        </Stack>
      </>
    );
  } else {
    return (
      <Stack spacing={2}>
        {assets.map((asset) => (
          <Card>
            <CardContent>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: asset.grow ? green[500] : red[500],
                }}
              >
                <Typography variant="h6">{asset.id}</Typography>
                <Stack direction="row" spacing={1}>
                  <Typography>{asset.totalAmount.toFixed(2)}&nbsp;$</Typography>
                  {asset.grow ? <TrendingUp /> : <TrendingDown />}
                </Stack>
              </Stack>
              <List>
                {[
                  {
                    title: "Total Profit",
                    value: asset.totalProfit,
                  },
                  {
                    title: "Asset Amount",
                    value: asset.amount,
                  },
                  {
                    title: "Difference",
                    value: asset.growPercent,
                  },
                ].forEach(e => (
                  <ListItem divider={true}>
                    <ListItemText primary="List item" />
                  </ListItem>
                ))}
                {/* <ListItem divider={true}>
                  <ListItemText primary="List item" />
                </ListItem>
                <ListItem divider={true}>
                  <ListItemText primary="List item" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="List item" />
                </ListItem> */}
              </List>
            </CardContent>
          </Card>
        ))}
      </Stack>
    );
  }
}
