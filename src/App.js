import { useState } from "react";

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  let CalcBmi;
  function handleCalculate(e) {
    e.preventDefault();
    const heightinMeter = Number(height) / 100;
    CalcBmi = Number(weight) / (heightinMeter * heightinMeter);
    setBMI(CalcBmi.toFixed(1));
    console.log(CalcBmi);
  }

  return (
    <div>
      <h3>Enter your details below</h3>
      <BmiForm
        weight={weight}
        height={height}
        onSetHeight={setHeight}
        onSetWeight={setWeight}
        onCalculate={handleCalculate}
      />
      <Result bmi={bmi} />
    </div>
  );
}

function BmiForm({ weight, height, onSetHeight, onSetWeight, onCalculate }) {
  return (
    <form action="submit" onSubmit={onCalculate}>
      <div>
        <label>Weight</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => onSetWeight(e.target.value)}
          placeholder="kg"
        />
      </div>
      <div>
        <label>Height</label>
        <input
          type="number"
          value={height}
          onChange={(e) => onSetHeight(e.target.value)}
          placeholder="cm"
        />
      </div>
      <button>Calculate</button>
    </form>
  );
}

function Result({ bmi }) {
  if (!bmi)
    return (
      <div>
        <h4>Welcome</h4>
        <p>Enter your height and weight to calculate your BMI</p>
      </div>
    );

  return <h3>Your BMI is {bmi}</h3>;
  //
}
