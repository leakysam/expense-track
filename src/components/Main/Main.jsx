import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../../context/context";
import InfoCard from "../InfoCard";
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./styles";
const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Sam" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $ { balance }
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5rem", marginTop: "20px" }}
        >
          <InfoCard />
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
