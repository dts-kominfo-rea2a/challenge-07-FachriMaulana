const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (element) => {
  try {
    const hasilpromiseTheaterIXX = await promiseTheaterIXX();
    const hasilpromiseTheaterVGC = await promiseTheaterVGC();
    const concatHasil = hasilpromiseTheaterIXX.concat(hasilpromiseTheaterVGC);

    return concatHasil.filter((data) => data.hasil === element).length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
