import { useState } from "react";
import { evaluate } from "mathjs";
function Calculator() {
  const [num1, setNum1] = useState("0");

  const [num2, setnum2] = useState("0");

  const [op, setOp] = useState("+");

  const [result, setResult] = useState(0);
  const [memory, setMemory] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const myArray = [parseInt(`${num1}`), `${op}`, parseInt(`${num2}`)];
    const results = evaluate(myArray.join(" "));
    setResult(evaluate(myArray.join(" ")));
    setMemory((memory) => [
      {
        num1,
        num2,
        op,
        res: results,
        time: new Date().toLocaleTimeString(),
      },
      ...memory,
    ]);
  };
  return (
    <div className="container text-white font-weight-bold">
      <form onSubmit={submitHandler}>
        <h2 className="text-center text-white">Super Calculator</h2>
        <div className="form-group row">
          <div className="col-md-4 p-0">
            <label htmlFor="num1"></label>
            <input
              type="text"
              id="num1"
              name="num1"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <select
              className="w-100"
              name="operator"
              id="operator"
              onChange={(e) => setOp(e.target.value)}
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
              <option value="%">%</option>
            </select>
          </div>

          <div className="col-md-4 p-0">
            <input
              type="text"
              id="num2"
              name="num2"
              value={num2}
              onChange={(e) => setnum2(e.target.value)}
            />
          </div>
        </div>

        <h3>{result}</h3>

        <div className="center">
          <input type="submit" value="GO!" />
        </div>
      </form>
      <h4>History</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Expression</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {memory.map((mem) => (
            <tr key={mem.time}>
              <td>{mem.time}</td>
              <td>
                <span>{mem.num1}</span>
                <span>{mem.op}</span>
                <span>{mem.num2}</span>
              </td>
              <td>{mem.res}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
