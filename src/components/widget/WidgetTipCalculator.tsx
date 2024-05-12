"use client";

import { Button, Card, Flex, Input, Space, Radio } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import utils from "@/utils";
import { RadioChangeEvent } from "antd/lib";

enum Percentage {
  five = 5,
  ten = 10,
  fifteen = 15,
}

enum Rounded {
  down,
  exact,
  up,
}

export default function WidgetTipCalculator() {
  const [percentage, setPercentage] = useState(Percentage.five);
  const [input, setInput] = useState<string>();
  const [inputNumber, setInputNumber] = useState<number>(0);
  const [rounded, setRounded] = useState<Rounded>(Rounded.exact);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const items = [Percentage.five, Percentage.ten, Percentage.fifteen];

  useEffect(calcTotal, [inputNumber, percentage, rounded]);

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const targetValue = event.target.value;
    const value = utils.parseStringToFloat(targetValue);
    console.log("handleInput " + value);

    if (isNaN(value)) {
      setInputNumber(0);
      setInput("");
      return;
    }

    setInputNumber(value);
    setInput(targetValue);
  }

  function handleRoundedChange(event: RadioChangeEvent) {
    setRounded(event.target.value);
  }

  function calcTotal() {
    const tip = parseFloat(((inputNumber * percentage) / 100).toFixed(2));

    let total = parseFloat((inputNumber + tip).toFixed(2));
    let roundedValue = 0;

    if (rounded === Rounded.down) {
      console.log("rounded down");
      roundedValue = total - Math.floor(total);

      total -= roundedValue;
    } else if (rounded === Rounded.up) {
      console.log("rounded up");
      roundedValue = Math.ceil(total) - total;
      total += roundedValue;
    }

    setTotal(total);
    setTip(tip);
  }

  return (
    <Card>
      <Space size="middle" direction="vertical">
        <Input type="string" prefix="€" value={input} onInput={handleInput} />
        <Space size="middle">
          {items.map((item) => (
            <Button
              key={item}
              onClick={() => {
                setPercentage(item);
                calcTotal();
              }}
              type={percentage == item ? "primary" : "default"}
            >
              {item}%
            </Button>
          ))}
        </Space>
        <Radio.Group
          defaultValue={Rounded.exact}
          buttonStyle="solid"
          size="small"
          onChange={handleRoundedChange}
        >
          <Radio.Button value={Rounded.down}>abrunden</Radio.Button>
          <Radio.Button value={Rounded.exact}>exakt</Radio.Button>
          <Radio.Button value={Rounded.up}>aufrunden</Radio.Button>
        </Radio.Group>
        {
          <div>
            <h1>{inputNumber > 0 ? total : 0} €</h1>
            (Tip: {inputNumber > 0 ? tip : 0} €)
          </div>
        }
      </Space>
    </Card>
  );
}
