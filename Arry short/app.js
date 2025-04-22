const arr = [1, 5, 5, "javaScript"];

const f = arr.find((i) => {
  return i <= 1 ? i : null;
});


if (f.length > 0){
    arr.push(f*5)
}
