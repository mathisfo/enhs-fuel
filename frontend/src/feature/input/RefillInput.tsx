import React, { useState } from "react";
import { Refill } from "../../types/Refill";
import {
  Button,
  Checkbox,
  Form,
  FormInput,
  Input,
  Message,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

const RefillInput = () => {
  const [value, setValue] = useState<number>(0);
  const [selectedAircraft, setSelectedAircraft] = useState("");

  console.log(selectedAircraft);

  const handleRefuelSubmit = async () => {
    const response = await fetch("http://localhost:8080/refill/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        aircraft: aircraft,
        firstname: name,
        amount: pumpValue,
        fueltype: fuel,
      }),
    });
  };

  const fueltype = [
    { key: "100ll", text: "100LL", value: "100LL" },
    { key: "ul91", text: "UL91", value: "UL91" },
    { key: "mogas", text: "MOGAS", value: "MOGAS" },
  ];

  const aircraft = [
    { key: "wt9", text: "LN-YDM", value: "YDM" },
    { key: "dr400", text: "LN-DFK", value: "DFK" },
    { key: "c172", text: "LN-DFM", value: "DFM" },
    { key: "cub", text: "LN-ACF", value: "ACF" },
    { key: "other", text: "Eksternt fly", value: "OTHER" },
  ];

  return (
    <div>
      <Message
        attached
        warning
        header="Du fyller på eksternt fly!"
        content="Fylling av eksterne fly som ikke er tilknyttet ENHS skjer etter avtale"
      />
      <Form>
        <Form.Group widths="equal">
          <Form.Select
            label="Fly"
            options={aircraft}
            onChange={(e, { data }) => setSelectedAircraft(data)}
            placeholder="Fly du har fylt"
          />
          <Form.Select
            label="Fuel type"
            options={fueltype}
            placeholder="Hvilket type fuel har du fylt"
          />

          <Form.Field
            control={Input}
            label="Ny målertilstand i liter"
            placeholder="Fyll inn ny målertilstand i Liter"
          />
          <Form.Field
            control={Input}
            label="Fylt av"
            placeholder="Fyll inn fornavn på personen som har fylt"
          />
        </Form.Group>

        <Form.Field control={Button} onClick>
          Submit
        </Form.Field>
      </Form>
    </div>
  );
};

export default RefillInput;
