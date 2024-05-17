"use client";

import { ChangeEvent, useEffect, useState } from "react";
import utils from "@/utils";
import { Input, Radio, Select, Col, RadioChangeEvent, Row } from "antd";

import UiBox from "../../ui/UiBox";

import { countries } from "./countries";

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
      <UiBox type="primary" className="mb-md">
        <h1 className="nut-heading-3 mb-xs">Endbetrag</h1>
        <Row>
          <Col span={12}>
            <div className="flex-align-items-center h-full">
              <div>
                <div>Inkl. € {inputNumber > 0 ? _result.tip : 0} Trinkgeld</div>
                <div>({_result.persentage} %)</div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <h2 className="nut-heading-1 text-right">
              € {inputNumber > 0 ? _result.total : 0}
            </h2>
          </Col>
        </Row>
      </UiBox>
    );
  }

  return (
    <div>
      <UiBox className="mb-md">
        <h2 className="nut-heading-4 mb-xs">Land</h2>
        <Select
          className="w-full"
          size="large"
          options={countries}
          defaultValue={countries[0]}
        />
      </UiBox>

      <div className="mb-xl">
        In Deutschland ist es üblich, für guten Service 10 Prozent des
        Rechnungsbetrags als Trinkgeld zu geben, allerdings ist es freiwillig
        und nicht gesetzlich vorgeschrieben.
      </div>

      <div>
        <UiBox className="mb">
          <h2 className="nut-heading-4 mb-xs">Rechnungsbetrag</h2>

          <Input
            type="string"
            prefix="€"
            value={input}
            onInput={handleInput}
            className="mb-md"
            size="large"
          />

          <h2 className="nut-heading-4 mb-xs">Trinkgeld</h2>

          <div className="mb-md">
            <Radio.Group
              defaultValue={Percentage.ten}
              buttonStyle="solid"
              size="large"
            >
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
          </div>

          <h2 className="nut-heading-4 mb-xs">Rundung</h2>

          <Radio.Group
            defaultValue={Rounded.exact}
            buttonStyle="solid"
            onChange={handleRoundedChange}
            size="large"
          >
            <Radio.Button value={Rounded.down}>abrunden</Radio.Button>
            <Radio.Button value={Rounded.exact}>keine</Radio.Button>
            <Radio.Button value={Rounded.up}>aufrunden</Radio.Button>
          </Radio.Group>
        </UiBox>

        <ResultBox />
      </div>
    </div>
  );
}
