// utils/payoffUtils.js
function calculatePayoff(x, y, player1IsX, experiment) {
  if (experiment === '3-A') {
    return {
      p1: matrixLookup(x, y),
      p2: matrixLookup(y, x),
    };
  }

  const profit = 100 * (x + y) + (2 / 3) * x * y;
  const p1Cost = player1IsX ? x ** 2 : y ** 2;
  const p2Cost = player1IsX ? y ** 2 : x ** 2;

  return {
    p1: profit - p1Cost,
    p2: profit - p2Cost,
  };
}
