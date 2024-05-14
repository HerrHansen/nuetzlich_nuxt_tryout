"use client";

import { ChangeEvent, useEffect, useState } from "react";
import utils from "@/utils";
import { Input, Space, Radio } from "antd";
import { Col, RadioChangeEvent, Row, Typography } from "antd/lib";

import { Select } from "antd/lib";

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

export default function TipCalculator() {
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
        <Typography.Title level={2}>Endbetrag</Typography.Title>
        <Row>
          <Col span={12}>
            <div>Inkl. € {inputNumber > 0 ? _result.tip : 0} Trinkgeld</div>
            <div>({_result.persentage} %)</div>
          </Col>
          <Col span={12}>
            <Typography.Title level={1} className="text-right">
              € {inputNumber > 0 ? _result.total : 0}
            </Typography.Title>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-secondary p-md">
        <Typography.Title level={2}>Land</Typography.Title>
        <Select style={{ width: "100%" }} />
      </div>

      <div>
        In Deutschland ist es üblich, für guten Service 10 Prozent des
        Rechnungsbetrags als Trinkgeld zu geben, allerdings ist es freiwillig
        und nicht gesetzlich vorgeschrieben.
      </div>

      <div>
        <Space size="middle" direction="vertical">
          <Typography.Title level={2}>Rechnungsbetrag</Typography.Title>
          <Input type="string" prefix="€" value={input} onInput={handleInput} />

          <Typography.Title>Trinkgeld</Typography.Title>
          <Radio.Group defaultValue={Percentage.ten} buttonStyle="solid">
            {items.map((item) => (
              <Radio.Button
                value={item}
                key={item}
                onClick={() => {
                  setPercentage(item);
                  calcTotal();
                }}
              >
                {item} %
              </Radio.Button>
            ))}
          </Radio.Group>

          <Typography.Title level={2}>Rundung</Typography.Title>
          <Radio.Group
            defaultValue={Rounded.up}
            buttonStyle="solid"
            onChange={handleRoundedChange}
          >
            <Radio.Button value={Rounded.down}>abrunden</Radio.Button>
            <Radio.Button value={Rounded.up}>aufrunden</Radio.Button>
          </Radio.Group>

          <div>
            <ResultBox />
          </div>
        </Space>
      </div>
    </div>
  );
}
