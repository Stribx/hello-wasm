import init, { increment, decrement} from "../pkg/hello_wasm.js";
init().then(() => {
  let count = 0;
  const buttonIncrement = document.getElementById("increment");
  const buttonDecrement = document.getElementById("decrement");
  buttonIncrement.addEventListener("click", handleClick);
  buttonDecrement.addEventListener("click", handleClick);
  function handleClick(e) {
    if (e.target.id === "increment") {
      count = increment(count);
    } else {
      count = decrement(count);
    }
    value.textContent = count;
  }
});