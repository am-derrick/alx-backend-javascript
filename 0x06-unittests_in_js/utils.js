const Utils = {
  calculateNumber(type, a, b) {
    const aRoundOff = Math.round(a);
    const bRoundOff = Math.round(b);
    if (type === 'SUM') {
      return aRoundOff + bRoundOff;
    }
    if (type === 'SUBTRACT') {
      return aRoundOff - bRoundOff;
    }
    if (type === 'DIVIDE') {
      if (bRoundOff === 0) {
        return 'Error';
      }
      return aRoundOff / bRoundOff;
    }
  },
};
  
module.exports = Utils;
