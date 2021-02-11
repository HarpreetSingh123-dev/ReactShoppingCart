const TOTAL = [];

export default function totalReducer(state = TOTAL, action = {}) {
  switch (action.type) {
    case "TOTAL_OF_CART": {
      console.log("in total");
      //console.log(action.payload)
      //console.log(action.payload[0].units.units)
      var total = state;
      var test = action.payload;

      if (test.length >= 1) {
        const totalPriceOfCollectiveUnits = test.map(pp => {
          return pp.units.units * pp.price;
        });

        console.log(totalPriceOfCollectiveUnits);

        const b = totalPriceOfCollectiveUnits.reduce((lp, l) => {
          return lp + l;
        });

        total = b;
        return total;
      }
    }
  }

  return state;
}
