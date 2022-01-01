//VERSION=3
function setup() {
  return {
    input: ["B02","B03","B04", "B08", "B11", "B12", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
return [(sample.B08 - sample.B04)/ (sample.B08 + sample.B04),  (sample.B03 - sample.B08) / (sample.B03 + sample.B08) , (sample.B03 - sample.B11) / (sample.B03 + sample.B11) , 4 * ( sample.B03 - sample.B11) - ( 0.25 * sample.B08 - 2.75 * sample.B12) ];
}
