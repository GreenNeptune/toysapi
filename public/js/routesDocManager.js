const createRoutesDoc = (_ar) => {
  _ar.map(item => {
    let routeDoc = new RouteDoc("#id_request_description", item);
    routeDoc.render();
  })
}