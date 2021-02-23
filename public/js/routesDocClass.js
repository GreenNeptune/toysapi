class RouteDoc {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.request = _item.request;
    this.status = _item.status;
    this.method = _item.method;
    this.description = _item.description;
    this.response = _item.response;
    this.color = _item.color;
    this.body = _item.body || "";
  }

  render() {

    let newDiv = $(`<li class="d-flex align-items-center justify-content-between p-3 border-bottom border-1 border-light bg-info text-white fw-bold mb-2 rounded" style="cursor:pointer;">`);
    $(this.parent).append(newDiv);


    $(newDiv).append(`
      <div class="bg-${this.color} p-2 rounded">${this.method}</div>
     <div>${this.description}</div>
    `)

    $(newDiv).on("click", () => {
      $("#id_request_responses").empty();
      $("#id_request_body").empty();
      $("#id_endpoint").empty();
      $("#id_status").empty();

      $("#id_endpoint").html(`${this.request}`);
      $("#id_status").html(`${this.status}`);


      $("#id_request_responses").html(`<pre class="border border-3 border-${this.color} bg-light " style="height: 300px;">
      ${this.response}
      </pre>`);

      if (this.body) {

        $("#id_request_body").html(`<pre class="border border-3 border bg-light overflow-auto" style="height: 300px;">
        ${this.body}
        </pre>`);
      } else {
      }
    })
  }
}