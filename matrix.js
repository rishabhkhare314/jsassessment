function mapdata() {

  let nodes = [];
  let edges = [];

  // Write your logic here...
  const row = 3;
  const col = 3;
  let z;
  function node() {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (j == row - 1)
          z = row - 1;
        else
          z = j + 1;
        if (z == j)
          z = z - 1;

        let obj = {
          "data": {
            id: `N${i}-${j}`
          }
        }

        let edg = {
          "data": {
            "id": `${i}-${j}`,
            "source": `N${i}-${j}`,
            "target": `N${i}-${z}`
          }
        }

        // if (j < col - 1) {
        //   edgCols = {
        //     "data": {
        //       "id": `${i}-${j}E`,
        //       "source": `N${i}-${j}`,
        //       'target': `N${i}-${j + 1}`
        //     }
        //   }
        // }

        // if (i < row - 1) {
        //   edgCols = {
        //     "data": {
        //       "id": `${i}-${j}S`,
        //       "source": `N${i}-${j}`,
        //       'target': `N${i + 1}-${j}`
        //     }
        //   }
        // }
      
        // if (i < row-1 && j < col-1) {
        //   edgCols = {
        //     "data": {
        //       "id": `${i}-${j}N`,
        //       "source": `N${i}-${j}`,
        //       'target': `N${i + 1}-${j}`
        //     }
        //   }

        // }
        // if (j < col - 1) {
        //   edgCols = {
        //     "data": {
        //       "id": `${i}-${j}W`,
        //       "source": `N${i}-${j}`,
        //       'target': `N${i}-${j + 1}`
        //     }
        //   }
        // }

        // if (i < row - 1 && j < col - 1) {
        //   edgCols = {
        //     "data": {
        //       "id": `${i}-${j}X`,
        //       "source": `N${i}-${j}`,
        //       'target': `N${i+1}-${j + 1}`
        //     }
        //   }
        //   edges.push(edgCols);
        // }

        // if (j > 0 && i < col - 1) {
        //   edgCols = {
        //     "data": {
        //       "id": `${i}-${j}Y`,
        //       "source": `N${i}-${j}`,
        //       'target': `N${i + 1}-${j - 1}`
        //     }
        //   }
        //   edges.push(edgCols);
        // }
      

        nodes.push(obj);
        edges.push(edg);
        edges.push(edgCols);
      }


    }
  }


  node();
  
  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;