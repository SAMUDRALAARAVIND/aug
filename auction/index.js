const url = "https://gauravgitacc.github.io/postAppData/auctionData.json";
const container = document.getElementById("container");
let prom = fetch(url);

async function fetchData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    renderData(result);
  } catch (error) {
    console.log({ error });
  }
}

function renderData(data) {
  // DOM manipulation after getting the data

  /**
   * <div class="card">
        <div class="top">
          <div class="left">
            <span class="badge">PENDING</span>
            <span class="case-number">S230KX230</span>
          </div>
          <div class="right">Mar 25, 2023, 11:02:05 AM</div>
        </div>
        <div class="bottom">
          <div class="from-location">Bengaluru International Airport</div>
          <div class="to-location">HSR Layout, Bengaluru, Karnataka, India</div>
          <div class="price">₹ 300</div>
        </div>
      </div>
   */
  /**
     * {
        "status": "CANCELLED",
        "caseNumber": "S230KX230",
        "date": "Mar 25, 2023, 11:02:05 AM",
        "fromLocation": "Bengaluru International Airport",
        "toLocation": "Koramangala 4th Block, Bengaluru, Karnataka, India",
        "fare": "₹ 400"
    }
    */
  data.forEach((card) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card";

    cardContainer.innerHTML = `
        <div class="top">
            <div class="left">
            <span class="badge ${card.status.toLowerCase()}">${
      card.status
    }</span>
            <span class="case-number">${card.caseNumber}</span>
            </div>
            <div class="right">${card.date}</div>
        </div>
        <div class="bottom">
            <div class="from-location">${card.fromLocation}</div>
            <div class="to-location">${card.toLocation}</div>
            <div class="price">${card.fare}</div>
        </div>`;

    container.appendChild(cardContainer);
  });
}

fetchData();
