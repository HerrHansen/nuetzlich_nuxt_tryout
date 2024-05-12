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

interface Result {
  exact: {
    total: number;
    tip: number;
    persentage: number;
  };
  roundedDown: {
    total: number;
    tip: number;
    persentage: number;
  };
  roundedUp: {
    total: number;
    tip: number;
    persentage: number;
  };
}

export default function WidgetTipCalculator() {
  const [percentage, setPercentage] = useState(Percentage.five);
  const [input, setInput] = useState<string>();
  const [inputNumber, setInputNumber] = useState<number>(0);
  const [rounded, setRounded] = useState<Rounded>(Rounded.exact);
  const [result, setResult] = useState<Result>({
    exact: {
      total: 0,
      tip: 0,
      persentage: 0,
    },
    roundedDown: {
      total: 0,
      tip: 0,
      persentage: 0,
    },
    roundedUp: {
      total: 0,
      tip: 0,
      persentage: 0,
    },
  });

  const items = [Percentage.five, Percentage.ten, Percentage.fifteen];

  useEffect(calcTotal, [inputNumber, percentage]);

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
    const total = parseFloat((inputNumber + tip).toFixed(2));
    // Only if over input
    const totalDown =
      Math.floor(total) > inputNumber ? Math.floor(total) : inputNumber;
    const totalUp = Math.ceil(total);

    const newResult: Result = {
      exact: {
        total: total,
        tip: tip,
        persentage: percentage,
      },
      roundedDown: {
        total: totalDown,
        tip: utils.fixFloat(totalDown - inputNumber),
        persentage: utils.calcPercentage(
          inputNumber,
          utils.fixFloat(totalDown - inputNumber)
        ),
      },
      roundedUp: {
        total: totalUp,
        tip: utils.fixFloat(totalUp - inputNumber),
        persentage: utils.calcPercentage(
          inputNumber,
          utils.fixFloat(totalUp - inputNumber)
        ),
      },
    };

    setResult(newResult);
  }

  function ResultBox() {
    let _result = result.exact;

    if (rounded === Rounded.down) _result = result.roundedDown;
    if (rounded === Rounded.up) _result = result.roundedUp;

    return (
      <div>
        <h1>{inputNumber > 0 ? _result.total : 0} €</h1>
        <h2>Tip: {inputNumber > 0 ? _result.tip : 0} €</h2>({_result.persentage}
        %)
      </div>
    );
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

        <div>
          <ResultBox />
        </div>
      </Space>
    </Card>
  );
}
