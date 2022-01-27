//Функция для увелечиния счетчика
function increaseCounter(i, j) {
  return i + parseInt(j.value);
}
//Функция для увеличения счетчика суммы
function increaseSumCounter(i, j, k) {
  return i + (parseInt(j.value) + parseInt(k.value));
}

//Функция уменьшения счетчика.
function decreaseCounter(i, j, k) {
  return i - j.children[k].innerHTML;
}
//Функция уменьшения значения ячейки.
function decreaseTd(i, j, k) {
  return parseInt(i.innerHTML) - parseInt(j.children[k].innerHTML);
}
//Функция уменьшеничя счетчика суммы.
function decreaseSumCounter(i, j, k, l) {
  return (
    i - (parseInt(j.children[k].innerHTML) + parseInt(j.children[l].innerHTML))
  );
}

//Функция обнуления ячейки при удалении всех строк.
function zeroingTd(i) {
  return parseInt(i.innerHTML) - parseInt(i.innerHTML);
}

//Функция подсчета процента.
function percentageCalculation(i, j) {
  return Math.round(((j * 100) / i) * 10) / 10;
}
//Функция подсчета процента для новых ячеек.
function percentageCalculationArr(i, j) {
  return Math.round(((parseInt(j.value) * 100) / parseInt(i.value)) * 10) / 10;
}

function tableFirst() {
  let tbl = document.getElementById("tbl"); //Достаем Таблицу
  let add = document.getElementById("add"); //Достаем кнопку "Добавить"
  let del = document.getElementById("del"); //Достаем кнопку "Удалить"
  //Достаем все инпуты
  let cons = document.getElementById("cons");
  let cons1 = document.getElementById("cons1");
  let cons2 = document.getElementById("cons2");
  let cons3 = document.getElementById("cons3");
  let cons4 = document.getElementById("cons4");
  let cons5 = document.getElementById("cons5");
  let cons6 = document.getElementById("cons6");
  let cons7 = document.getElementById("cons7");
  let cons8 = document.getElementById("cons8");
  let cons9 = document.getElementById("cons9");
  let cons10 = document.getElementById("cons10");
  let cons11 = document.getElementById("cons11");
  let cons12 = document.getElementById("cons12");
  let cons13 = document.getElementById("cons13");
  let cons14 = document.getElementById("cons14");
  let cons15 = document.getElementById("cons15");
  let cons16 = document.getElementById("cons16");
  //Достаем все ячейки последней строки таблицы
  let td1 = document.getElementById("td1");
  let td2 = document.getElementById("td2");
  let td3 = document.getElementById("td3");
  let td4 = document.getElementById("td4");
  let td5 = document.getElementById("td5");
  let td6 = document.getElementById("td6");
  let td7 = document.getElementById("td7");
  let td8 = document.getElementById("td8");
  let td9 = document.getElementById("td9");
  let td10 = document.getElementById("td10");
  let td11 = document.getElementById("td11");
  let td12 = document.getElementById("td12");
  let td13 = document.getElementById("td13");
  let td14 = document.getElementById("td14");
  let td15 = document.getElementById("td15");
  let td16 = document.getElementById("td16");
  let td17 = document.getElementById("td17");
  let td18 = document.getElementById("td18");
  let td19 = document.getElementById("td19");
  let td20 = document.getElementById("td20");
  let b = 1; //Счетчик
  //Счетчики для отслеживания изменений в ячейках последней строки таблицы.
  let d = 0;
  let a = 0;
  let c = 0;
  let e = 0;
  let f = 0;
  let g = 0;
  let h = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  let m = 0;
  let n = 0;
  let o = 0;
  let p = 0;
  let q = 0;
  let r = 0;
  let s = 0;
  let t = 0;
  let u = 0;
  let v = 0;
  // Функции для активации и деактивации кнопки удалить.
  function activeBtn() {
    if (b <= 1) {
      del.setAttribute("disabled", true);
    } else if (b > 1) {
      del.removeAttribute("disabled", true);
    }
  }
  activeBtn();
  //Функция создающая новую строку таблицы.
  function createRow() {
    if (
      cons.value !== "" &&
      cons1.value !== "" &&
      cons2.value !== "" &&
      cons3.value !== "" &&
      cons4.value !== "" &&
      cons5.value !== "" &&
      cons6.value !== "" &&
      cons7.value !== "" &&
      cons8.value !== "" &&
      cons9.value !== "" &&
      cons10.value !== "" &&
      cons11.value !== "" &&
      cons12.value !== "" &&
      cons13.value !== "" &&
      cons14.value !== "" &&
      cons15.value !== "" &&
      cons16.value !== ""
    ) {
      let tr = document.createElement("tr");
      tbl.append(tr);
      tr.classList.add("class");
      let arr = []; //Массив, хранящий созданные ячейки новой строки.
      if (b < 32) {
        for (let i = 0; i < 21; i++) {
          let td = document.createElement("td");
          tr.append(td);
          arr.push(td);
        }

        d = increaseCounter(d, cons);
        a = increaseCounter(a, cons1);
        c = increaseCounter(c, cons2);
        e = increaseSumCounter(e, cons1, cons2);
        f = increaseCounter(f, cons3);
        g = increaseCounter(g, cons4);
        h = increaseSumCounter(h, cons3, cons4);
        j = increaseCounter(j, cons5);
        k = increaseCounter(k, cons6);
        l = increaseCounter(l, cons7);
        m = increaseCounter(m, cons8);
        n = increaseCounter(n, cons9);
        o =
          o +
          parseInt(
            parseInt(cons6.value) +
              parseInt(cons7.value) +
              parseInt(cons8.value) +
              parseInt(cons9.value)
          );
        p = increaseCounter(p, cons10);
        q = increaseCounter(q, cons11);
        r = increaseCounter(r, cons12);
        s = increaseCounter(s, cons13);
        t = increaseCounter(t, cons14);
        u = increaseCounter(u, cons15);
        v = increaseCounter(v, cons16);

        arr[0].innerHTML = b; //Первая ячейка, показывающая номер дня
        b = b + 1;

        arr[1].innerHTML = cons.value;
        arr[2].innerHTML = cons1.value;
        arr[3].innerHTML = cons2.value;
        arr[4].innerHTML = parseInt(cons1.value) + parseInt(cons2.value);
        arr[5].innerHTML = cons3.value;
        arr[6].innerHTML = cons4.value;
        arr[7].innerHTML = parseInt(cons3.value) + parseInt(cons4.value);
        arr[8].innerHTML = cons5.value;
        arr[9].innerHTML = cons6.value;
        arr[10].innerHTML = cons7.value;
        arr[11].innerHTML = cons8.value;
        arr[12].innerHTML = cons9.value;
        arr[13].innerHTML =
          parseInt(cons6.value) +
          parseInt(cons7.value) +
          parseInt(cons8.value) +
          parseInt(cons9.value);
        arr[14].innerHTML = cons10.value;
        arr[15].innerHTML = cons11.value;
        arr[16].innerHTML = cons12.value;
        arr[17].innerHTML = cons13.value;
        arr[18].innerHTML = cons14.value;
        arr[19].innerHTML = cons15.value;
        arr[20].innerHTML = cons16.value;
        td1.innerHTML = d;
        td2.innerHTML = a;
        td3.innerHTML = c;
        td4.innerHTML = e;
        td5.innerHTML = f;
        td6.innerHTML = g;
        td7.innerHTML = h;
        td8.innerHTML = j;
        td9.innerHTML = k;
        td10.innerHTML = l;
        td11.innerHTML = m;
        td12.innerHTML = n;
        td13.innerHTML = o;
        td14.innerHTML = p;
        td15.innerHTML = q;
        td16.innerHTML = r;
        td17.innerHTML = s;
        td18.innerHTML = t;
        td19.innerHTML = u;
        td20.innerHTML = v;
      }
      // Вывод сообщения для пользователя.
      else if (b >= 32) {
        let i = document.querySelector(".class:last-child");
        i.remove();
        alert("Невозможно добавить более 31 строки");
      }
    }
  }
  //Функция для удаления строкки.
  function dele() {
    let i = document.querySelector(".class:last-child");
    if (b > 0) {
      del.removeAttribute("disabled");
      i.remove();
      b = b - 1;

      d = decreaseCounter(d, i, 1);
      td1.innerHTML = decreaseTd(td1, i, 1);

      a = decreaseCounter(a, i, 2);
      td2.innerHTML = decreaseTd(td2, i, 2);

      c = decreaseCounter(c, i, 3);
      td3.innerHTML = decreaseTd(td3, i, 3);

      e = decreaseSumCounter(e, i, 2, 3);
      td4.innerHTML = decreaseTd(td4, i, 4);

      f = decreaseCounter(f, i, 5);
      td5.innerHTML = decreaseTd(td5, i, 5);

      g = decreaseCounter(g, i, 6);
      td6.innerHTML = decreaseTd(td6, i, 6);

      h = decreaseSumCounter(h, i, 5, 6);
      td7.innerHTML = decreaseTd(td7, i, 7);

      j = decreaseCounter(j, i, 8);
      td8.innerHTML = decreaseTd(td8, i, 8);

      k = decreaseCounter(k, i, 9);
      td9.innerHTML = decreaseTd(td9, i, 9);

      l = decreaseCounter(l, i, 10);
      td10.innerHTML = decreaseTd(td10, i, 10);

      m = decreaseCounter(m, i, 11);
      td11.innerHTML = decreaseTd(td11, i, 11);

      n = decreaseCounter(n, i, 12);
      td12.innerHTML = decreaseTd(td12, i, 12);

      o =
        o -
        parseInt(
          parseInt(i.children[9].innerHTML) +
            parseInt(i.children[10].innerHTML) +
            parseInt(i.children[11].innerHTML) +
            parseInt(i.children[12].innerHTML)
        );
      td13.innerHTML = decreaseTd(td13, i, 13);

      p = decreaseCounter(p, i, 14);
      td14.innerHTML = decreaseTd(td14, i, 14);

      q = decreaseCounter(q, i, 15);
      td15.innerHTML = decreaseTd(td15, i, 15);

      r = decreaseCounter(r, i, 16);
      td16.innerHTML = decreaseTd(td16, i, 16);

      s = decreaseCounter(s, i, 17);
      td17.innerHTML = decreaseTd(td17, i, 17);

      t = decreaseCounter(t, i, 18);
      td18.innerHTML = decreaseTd(td18, i, 18);

      u = decreaseCounter(u, i, 19);
      td19.innerHTML = decreaseTd(td19, i, 19);

      v = decreaseCounter(v, i, 20);
      td20.innerHTML = decreaseTd(td20, i, 20);
    }
    //Изменение ячеек при условии если все записи удалены
    if (b <= 0) {
      td1.innerHTML = zeroingTd(td1);
      d = 0;
      td2.innerHTML = zeroingTd(td2);
      a = 0;
      td3.innerHTML = zeroingTd(td3);
      c = 0;
      td4.innerHTML = zeroingTd(td4);
      e = 0;
      td5.innerHTML = zeroingTd(td5);
      f = 0;
      td6.innerHTML = zeroingTd(td6);
      g = 0;
      td7.innerHTML = zeroingTd(td7);
      h = 0;
      td8.innerHTML = zeroingTd(td8);
      j = 0;
      td9.innerHTML = zeroingTd(td9);
      k = 0;
      td10.innerHTML = zeroingTd(td10);
      l = 0;
      td11.innerHTML = zeroingTd(td11);
      m = 0;
      td12.innerHTML = zeroingTd(td12);
      n = 0;
      td13.innerHTML = zeroingTd(td13);
      o = 0;
      td14.innerHTML = zeroingTd(td14);
      p = 0;
      td15.innerHTML = zeroingTd(td15);
      q = 0;
      td16.innerHTML = zeroingTd(td16);
      r = 0;
      td17.innerHTML = zeroingTd(td17);
      s = 0;
      td18.innerHTML = zeroingTd(td18);
      t = 0;
      td19.innerHTML = zeroingTd(td19);
      u = 0;
      td20.innerHTML = zeroingTd(td20);
      v = 0;
    }
  }
  //Слушатели событий
  del.addEventListener("click", dele);
  add.addEventListener("click", createRow);
  add.addEventListener("click", activeBtn);
  del.addEventListener("click", activeBtn);
}
tableFirst();

function tableSecond() {
  let tbl1 = document.getElementById("tbl1"); //Достаем Таблицу
  let add1 = document.getElementById("add1"); //Достаем кнопку "Добавить"
  let del1 = document.getElementById("del1"); //Достаем кнопку "Удалить"
  //Достаем все инпуты
  let cons17 = document.getElementById("cons17");
  let cons18 = document.getElementById("cons18");
  let cons19 = document.getElementById("cons19");
  let cons20 = document.getElementById("cons20");
  let cons21 = document.getElementById("cons21");
  let cons22 = document.getElementById("cons22");
  let cons23 = document.getElementById("cons23");
  let cons24 = document.getElementById("cons24");
  //Достаем все ячейки последней строки таблицы
  let td21 = document.getElementById("td21");
  let td22 = document.getElementById("td22");
  let td23 = document.getElementById("td23");
  let td24 = document.getElementById("td24");
  let td25 = document.getElementById("td25");
  let td26 = document.getElementById("td26");
  let td27 = document.getElementById("td27");
  let td28 = document.getElementById("td28");
  let td29 = document.getElementById("td29");
  let td30 = document.getElementById("td30");

  let b = 1; //Счетчик
  //Счетчики для отслеживания изменений в ячейках последней строки таблицы.
  let d = 0;
  let a = 0;
  let c = 0;
  let e = 0;
  let f = 0;
  let g = 0;
  let h = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  let m = 0;
  let n = 0;
  // Функции для активации и деактивации кнопки удалить.
  function activeBtn() {
    if (b <= 1) {
      del1.setAttribute("disabled", true);
    } else if (b > 1) {
      del1.removeAttribute("disabled", true);
    }
  }
  activeBtn();
  //Функция создающая новую строку таблицы.
  function createRow() {
    if (
      cons17.value !== "" &&
      cons18.value !== "" &&
      cons19.value !== "" &&
      cons20.value !== "" &&
      cons21.value !== "" &&
      cons22.value !== "" &&
      cons23.value !== "" &&
      cons24.value !== ""
    ) {
      let tr = document.createElement("tr");
      tbl1.append(tr);
      tr.classList.add("class1");
      let arr = []; //Массив, хранящий созданные ячейки новой строки.
      if (b <= 31) {
        for (let i = 0; i < 13; i++) {
          let td = document.createElement("td");
          tr.append(td);
          arr.push(td);
        }

        d = increaseCounter(d, cons17);
        a = increaseCounter(a, cons18);
        c = percentageCalculation(d, a);
        e = increaseCounter(e, cons19);
        f = increaseCounter(f, cons20);
        g = percentageCalculation(e, f);
        h = increaseCounter(h, cons21);
        j = increaseCounter(j, cons22);
        k = percentageCalculation(h, j);
        l = increaseCounter(l, cons23);
        m = increaseCounter(m, cons24);
        n = percentageCalculation(l, m);

        arr[0].innerHTML = b; //Первая ячейка, показывающая номер дня

        b = b + 1;
        arr[1].innerHTML = cons17.value;
        arr[2].innerHTML = cons18.value;
        arr[3].innerHTML = percentageCalculationArr(cons17, cons18); // Подсчёт процента и округление до первой цифры после запятой.
        arr[4].innerHTML = cons19.value;
        arr[5].innerHTML = cons20.value;
        arr[6].innerHTML = percentageCalculationArr(cons19, cons20);
        arr[7].innerHTML = cons21.value;
        arr[8].innerHTML = cons22.value;
        arr[9].innerHTML = percentageCalculationArr(cons21, cons22);
        arr[10].innerHTML = cons23.value;
        arr[11].innerHTML = cons24.value;
        arr[12].innerHTML = percentageCalculationArr(cons23, cons24);
        td21.innerHTML = d;
        td22.innerHTML = a;
        td23.innerHTML = c;
        td24.innerHTML = e;
        td25.innerHTML = f;
        td26.innerHTML = g;
        td27.innerHTML = h;
        td28.innerHTML = j;
        td29.innerHTML = k;
        td30.innerHTML = l;
        td31.innerHTML = m;
        td32.innerHTML = n;
      }
      // Вывод сообщения для пользователя.
      else if (b >= 32) {
        let i = document.querySelector(".class1:last-child");
        i.remove();
        alert("Невозможно добавить более 31 строки");
      }
    }
  }

  //Функция для удаления строкки.
  function dele() {
    let i = document.querySelector(".class1:last-child");
    if (b > 0) {
      del1.removeAttribute("disabled");
      i.remove();
      b = b - 1;

      d = decreaseCounter(d, i, 1);
      td21.innerHTML = decreaseTd(td21, i, 1);

      a = decreaseCounter(a, i, 2);
      td22.innerHTML = decreaseTd(td22, i, 2);

      c = percentageCalculation(d, a);
      td23.innerHTML = percentageCalculation(d, a);

      e = decreaseCounter(e, i, 4);
      td24.innerHTML = decreaseTd(td24, i, 4);

      f = decreaseCounter(f, i, 5);
      td25.innerHTML = decreaseTd(td25, i, 5);

      g = percentageCalculation(e, f);
      td26.innerHTML = percentageCalculation(e, f);

      h = decreaseCounter(h, i, 7);
      td27.innerHTML = decreaseTd(td27, i, 7);

      j = decreaseCounter(j, i, 8);
      td28.innerHTML = decreaseTd(td28, i, 8);

      k = percentageCalculation(h, j);
      td29.innerHTML = percentageCalculation(h, j);

      l = decreaseCounter(l, i, 10);
      td30.innerHTML = decreaseTd(td30, i, 10);

      m = decreaseCounter(m, i, 11);
      td31.innerHTML = decreaseTd(td31, i, 11);

      n = percentageCalculation(l, m);
      td32.innerHTML = percentageCalculation(l, m);
    }
    //Изменение ячеек при условии если все записи удалены
    if (b <= 0) {
      td21.innerHTML = zeroingTd(td21);
      d = 0;
      td22.innerHTML = zeroingTd(td22);
      a = 0;
      td23.innerHTML = zeroingTd(td23);
      c = 0;
      td24.innerHTML = zeroingTd(td24);
      e = 0;
      td25.innerHTML = zeroingTd(td25);
      f = 0;
      td26.innerHTML = zeroingTd(td26);
      g = 0;
      td27.innerHTML = zeroingTd(td27);
      h = 0;
      td28.innerHTML = zeroingTd(td28);
      j = 0;
      td29.innerHTML = zeroingTd(td29);
      k = 0;
      td30.innerHTML = zeroingTd(td30);
      l = 0;
      td31.innerHTML = zeroingTd(td31);
      m = 0;
      td32.innerHTML = zeroingTd(td32);
      n = 0;
    }
  }
  //Слушатели событий.
  del1.addEventListener("click", dele);
  add1.addEventListener("click", createRow);
  add1.addEventListener("click", activeBtn);
  del1.addEventListener("click", activeBtn);
}
tableSecond();
