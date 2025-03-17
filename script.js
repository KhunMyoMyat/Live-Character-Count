const textarea = document.querySelector("#textarea");
const countNum = document.querySelector(".countNum");

function countingCharacters() {
  const textLength = textarea.value.length;
  //   console.log(textLength);

  countNum.innerText = textLength;
}
