$(() => {
  init();
})

const init = () => {
  RoutesDocInit(routes_doc);
  createRoutesDoc(routes_doc);
}

function RoutesDocInit(ar) {
  const { request, status, color, body, response } = ar[0];

  $("#id_endpoint").html(`${request}`);
  $("#id_status").html(`${status}`);

  $("#id_request_responses").html(`<pre class="border border-3 border-${color} bg-light overflow-auto" style="height: 300px;">
  ${response}
  </pre>`);

  if (body) {
    $("#id_request_body").html(`<pre class="border border-3 border-light bg-light overflow-auto" style="height: 300px;">
    ${body}
    </pre>`);
  }
}