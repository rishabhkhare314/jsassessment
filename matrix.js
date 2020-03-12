function mapdata() {

  let nodes = [];
  let edges = [];
  // let row = 3
  // Write your logic here...
  const row = 3;
  const col = 3;
  let z;
  let node = () => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        // if (j == row - 1)
        //   z = row - 1;
        // else
        //   z = j + 1;
        // if (z == j)
        //   z = z - 1;

      
        let obj = {
          "data": {
            id: `N${i}-${j}`
          }
        }

        // let edg = {
        //   "data": {
        //     "id": `${i}-${j}`,
        //     "source": `N${i}-${j}`,
        //     "target": `N${i}-${z}`
        //   }
        // }


        if (j < col - 2) {
          edgCols = {
            "data": {
              "id": `${i}-${j}E`,
              "source": `N${i}-${j}`,
              'target': `N${i}-${j + 1}`
            }
          }
          edges.push(edgCols)
        }

        if (i < row - 2) {
          edgCols = {
            "data": {
              "id": `${i}-${j}S`,
              "source": `N${i}-${j}`,
              'target': `N${i + 1}-${j}`
            }
          }
          edges.push(edgCols)
        }
        if (i > 0) {
          edgCols = {
            "data": {
              "id": `${i}-${j}N`,
              "source": `N${i}-${j}`,
              'target': `N${i - 1}-${j}`
            }
          }
          edges.push(edgCols)
        }
        if (j > 0) {
          edgCols = {
            "data": {
              "id": `${i}-${j}W`,
              "source": `N${i}-${j}`,
              'target': `N${i}-${j - 1}`
            }
          }
          edges.push(edgCols)
        }
        // if (j < col - 1) {
        //   edgCols = {
        //     "data": {
        //       "id": `${i}-${j}W`,
        //       "source": `N${i}-${j}`,
        //       'target': `N${i}-${j + 1}`
        //     }
        //   }
        // }

        if (i < row - 1 && j < col - 1) {
          edgCols = {
            "data": {
              "id": `${i}-${j}X`,
              "source": `N${i}-${j}`,
              'target': `N${i + 1}-${j + 1}`
            }
          }
          edges.push(edgCols);
        }

        if (j > 0 && i < col - 1) {
          edgCols = {
            "data": {
              "id": `${i}-${j}Y`,
              "source": `N${i}-${j}`,
              'target': `N${i + 1}-${j - 1}`
            }
          }
          edges.push(edgCols);
        }
        nodes.push(obj);
        edges.push(edgCols);
      }
    }
  }



  node();

  //console.log("EDGES LENGTH :" , edges.length);


  elements = {
    nodes,
    edges
  };

  console.log("Node Length: ", nodes.length)
  console.log("Edges Length: ", edges.length)
  return elements;

}
module.exports.mapdata = mapdata;