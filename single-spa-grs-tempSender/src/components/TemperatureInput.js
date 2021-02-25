import React, {Fragment, useRef, useState} from "react";
import { Container, Input } from 'semantic-ui-react'

function TemperatureInput(props) {

  const inputEl = useRef(null);

  const  [temp, setTemp] = useState('')

  const registerTemperature = (event) => {
    console.log("Sending: ", temp)

    props.globalEventDistributor.dispatchAll({type: 'NEW_TEMP', payload: {timestamp: Date.now(), value: temp}})
    setTemp('')
  }

  return (
    <Fragment>
      <h1>Send your temperature</h1>
     <Input value={temp} onChange={(e)=>setTemp(e.target.value)} action={{content:'Register', onClick: registerTemperature}} placeholder='Insert temperature'  />
    </Fragment>
  );
}

export default TemperatureInput;
