//VERSION=3
function setup() {
  return {
    input: ["B05","B07","B06", "B03", "B04", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
return [(sample.B05 - sample.B04)/ (sample.B05 + sample.B04),  (sample.B03 - sample.B05) / (sample.B03 + sample.B05) , (sample.B03 - sample.B06) / (sample.B03 + sample.B6) , 4 * ( sample.B03 - sample.B06) - ( 0.25 * sample.B05 - 2.75 * sample.B07) ];
}
