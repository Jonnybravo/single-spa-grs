import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Divider, Icon, Grid, Segment, Table } from "semantic-ui-react";
import { Line } from "@reactchartjs/react-chart.js";

function TemperatureRegister(props) {
  const temperatures = useSelector((state) => state.temperatures);

  const [graphData, setGraphData] = useState({});

  const options = {
    scales: {
      xAxes: [
        {
          type: "time",
          distribution: 'series',
          ticks: {
            source: "labels",
          },
          time: {
            minUnit: "second",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  useEffect(() => {
    console.log("HERE", temperatures);

    let graphData = {
      labels: temperatures.map((a) => new Date(a.timestamp)),
      datasets: [
        {
          label: "Temperatures",
          data: temperatures.map((a) => a.value),
          fill: false,
          backgroundColor: "rgb(33, 133, 208)",
          borderColor: "rgba(33, 133, 208, 0.7)",
        },
      ],
    };

    console.log(graphData);

    setGraphData(graphData);
  }, [temperatures]);

  const getDateFormatted = (temperature) => {
    let date = new Date(temperature.timestamp);
    console.log(date.toLocaleDateString("pt-pt"));

    return date.toLocaleString("pt-pt");
  };

  return (
    <Fragment>
      <h1>Registered Temperature</h1>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                  <Table.HeaderCell>Temperature</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {temperatures.map((temperature, idx) => (
                  <Table.Row key={idx}>
                    <Table.Cell>{getDateFormatted(temperature)}</Table.Cell>
                    <Table.Cell>{temperature.value} &#176;C</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Line data={graphData} options={options} />
          </Grid.Column>
        </Grid>

        <Divider vertical> <Icon name='bar chart' /></Divider>
      </Segment>
    </Fragment>
  );
}

export default TemperatureRegister;
