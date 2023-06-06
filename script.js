function nilaiMasing2(value) {
  document.getElementById("display").value += value;
}

function hapusCalc() {
  document.getElementById("display").value = "";
}

function deleteLastDigit() {
  const displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
}

function hasilKeseluruhan() {
  const displayValue = document.getElementById("display").value;
  try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
