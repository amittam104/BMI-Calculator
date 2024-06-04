export default function App() {
  return (
    <div>
      <h3>Enter your details below</h3>
      <BmiForm />
      <Result />
    </div>
  );
}

function BmiForm() {
  return (
    <form action="submit">
      <div>
        <label>Weight</label>
        <input type="number" placeholder="kg" />
      </div>
      <div>
        <label>Height</label>
        <input type="number" placeholder="cm" />
      </div>
      <button>Calculate</button>
    </form>
  );
}

function Result() {
  return (
    <div>
      <h4>Welcome</h4>
      <p>Enter your height and weight to calculate your BMI</p>
    </div>
  );
}
