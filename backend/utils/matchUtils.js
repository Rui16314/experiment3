// utils/matchUtils.js
function assignRoles(p1, p2, round, experiment) {
  if (experiment === '3-A') {
    const switchRoles = round > 5;
    return {
      player1IsX: !switchRoles,
      player2IsY: switchRoles,
    };
  } else {
    return {
      player1IsX: p1.group === 'A',
      player2IsY: p2.group === 'B',
    };
  }
}
