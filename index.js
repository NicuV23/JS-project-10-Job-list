"use strict";

const buttons = document.querySelectorAll(".leftSpan");
const sorting = document.querySelector(".sorting");
const options = document.querySelectorAll(".Frontend");
const erase = document.querySelectorAll(".delete");
const clear = document.querySelector(".clear");
const toolBar = document.querySelector(".toolBar");
const elementOne = document.getElementById("elementOne");
const elementTwo = document.getElementById("elementTwo");

console.log(options);

clear.addEventListener("click", function () {
  sorting.classList.add("hidden");
  options[0].classList.add("hidden");
  options[1].classList.add("hidden");
  options[2].classList.add("hidden");
  options[3].classList.add("hidden");
  options[4].classList.add("hidden");
  options[5].classList.add("hidden");
  options[6].classList.add("hidden");
  options[7].classList.add("hidden");
  options[8].classList.add("hidden");
  options[9].classList.add("hidden");
  options[10].classList.add("hidden");
  options[11].classList.add("hidden");
  options[12].classList.add("hidden");
  options[13].classList.add("hidden");
  options[14].classList.add("hidden");
  options[15].classList.add("hidden");
});

for (let i = 0; i < erase.length; i++) {
  erase[i].addEventListener("click", function () {
    options[i].classList.add("hidden");
    checkSortingVisibility();
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[0].addEventListener("click", function () {
    sorting.classList.remove("hidden");
    clear.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[0].classList.remove("hidden");
    }
    checkSortingVisibility();
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[1].addEventListener("click", function () {
    sorting.classList.remove("hidden");
    clear.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[1].classList.remove("hidden");
    }
    checkSortingVisibility();
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[2].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[2].classList.remove("hidden");
    }
    checkSortingVisibility();
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[3].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[3].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[4].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[4].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[5].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[5].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[6].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[6].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[7].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[7].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[8].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[8].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[9].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[0].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[10].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[9].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[11].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[8].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[12].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[10].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[13].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[4].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[14].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[0].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[15].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[9].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[16].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[3].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[17].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[4].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[18].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[5].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[19].addEventListener("click", function () {
    sorting.classList.remove("hidden");
    clear.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[6].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[20].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[4].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[20].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[4].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[21].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[10].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[22].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[11].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[23].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[12].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[24].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[9].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[25].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[11].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[26].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[13].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[27].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[0].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[28].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[9].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[29].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[2].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[30].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[10].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[31].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[4].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[32].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[0].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[33].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[9].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[34].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[14].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[35].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[4].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[36].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[10].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[37].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[5].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[38].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[6].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[39].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[4].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[40].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[15].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[41].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[7].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[42].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[0].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[43].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[9].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[44].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[8].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[45].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[10].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}
for (let i = 0; i < buttons.length; i++) {
  buttons[46].addEventListener("click", function () {
    clear.classList.remove("hidden");
    sorting.classList.remove("hidden");
    for (let i = 0; i < options.length; i++) {
      options[4].classList.remove("hidden");
      checkSortingVisibility();
    }
  });
}

function checkSortingVisibility() {
  const visibleOptions = Array.from(options).filter(
    (option) => !option.classList.contains("hidden")
  );

  sorting.classList.toggle("hidden", visibleOptions.length === 0);
}

while (options[0].classList.contains("hidden")) {
  elementOne.classList.add("hidden");
}
