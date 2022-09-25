function getDetails() {
//   let ipLocation = document.getElementsByName("ipInput")[0].value;
  let url = `http://ip-api.com/json/${
    document.getElementById("ipInput").value
  }`;

  // console.log(url)
  // 24.48.0.1
  // 2401:4900:3dab:a4e2:a794:9a27:5822:8558

  let str = ``;

//   console.log(ipLocation);
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      str += `<ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Country --> </span>${data.country}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Region --> </span>${data.regionName}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">City --> </span>${data.city}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Timezone --> </span>${data.timezone}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Your IP --> </span>${data.query}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Service Provider --> </span
            >${data.isp}
          </li>
          <li class="list-group-item">
            <span style="font-weight: bold; color: green;">Organization --> </span>${data.org}
          </li>
        </ul>`;
      console.log(str);
      document.getdatamentById("result").innerHTML = str;
    });

  // console.log(str)
}
