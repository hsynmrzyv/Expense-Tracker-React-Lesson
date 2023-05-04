import "./App.css";

// Hooks
import { useState } from "react";

const App = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ]);

  return (
    <div>
      <h2>Expense Tracker</h2>
      <div className="container">
        {/* Balance */}
        <h4>Your Balance</h4>
        <h1>$0.00</h1>
      </div>

      {/* Income and Expense */}

      <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">
            +$0.00
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">
            -$0.00
          </p>
        </div>
      </div>

      {/* Transaction List */}
      <h3>History</h3>
      <ul id="list" class="list">
        <li class="minus">
          Cash <span>-$400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>

      {/* Add Transactions */}
      <h3>Add new transaction</h3>
      <form id="form">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default App;
