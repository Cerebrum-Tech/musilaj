//VERSION=3
function setup() {
  return {
    input: ["B02","B03", "B04", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
return [ sample.B03 - (sample.B02 + ( sample.B03 - sample.B02 ) / (sample.B04 - sample.B02) * (sample.B04 - sample.B02))  , 0 , 0, sample.dataMask ];
}
