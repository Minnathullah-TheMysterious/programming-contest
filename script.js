let url = "https://kontests.net/api/v1/all";
let p = fetch(url);
p.then((response) => {
  return response.json();
}).then((response) => {
  // console.log(response);
  let ihtml = "";
  for (item in response) {
    console.log(response[item]);
    ihtml += `
    <div class="card mb-3 ml-3" style="width: 22.5rem;">
        <img src="https://forbes.co.il/e/wp-content/uploads/2021/06/shutterstock-1331627603-1024x683-1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${response[item].name}</h5>
          <p class="card-text">Starts at:  ${response[item].start_time}</p>
          <p class="card-text">Ends at:  ${response[item].end_time}</p>
          <p class="card-text">Duration:  ${response[item].duration}</p>
          <p class="card-text">In 24 hours?  --${response[item].in_24_hours}</p>
          <p class="card-text">Site:  ${response[item].site}</p>
          <p class="card-text">Status:  ${response[item].status}</p>
          <a href="${response[item].url}" class="btn btn-primary mt-4">Visit Contest</a>
        </div>
      </div>`;
    document.getElementById("cardsContainer").innerHTML = ihtml;
  }
});