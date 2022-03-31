let equal_pressed = 0;
// comment
let button_input = document.querySelectorAll(".input-button");
// comment
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";

};

// for each
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
      if (equal_pressed == 1) {
        input.value = "";
        equal_pressed = 0;
      }
      //display value of each button
      input.value += button_class.value;
    });
  });




// solve
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
      
      let solution = eval(inp_val);
      
      if (Number.isInteger(solution)) {
        input.value = solution;
      } else {
        input.value = solution.toFixed(2);
      }
    } catch (err) {
      
      alert("Invalid Input");
    }
  });

//   clear
clear.addEventListener("click", () => {
    input.value = "";
});

// erase
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
}

);

