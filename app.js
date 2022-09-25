let ip = document.getElementById("ipInput").value;
function getDetails() {
  let url = `http://ip-api.com/json/${ip}`;

  // console.log(url)
  // 24.48.0.1
  // 2401:4900:3dab:a4e2:a794:9a27:5822:8558

  let str = ``;

  fetch(url)
    .then((data) => data.json())
    .then( ele => {
      str += `<ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Country --> </span>${ele.country}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Region --> </span>${ele.regionName}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">City --> </span>${ele.city}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Timezone --> </span>${ele.timezone}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Your IP --> </span>${ele.query}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Service Provider --> </span
            >${ele.isp}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Organization --> </span>${ele.org}
          </li>
        </ul>`;
      document.getElementById("result").innerHTML = str;
    });
}
