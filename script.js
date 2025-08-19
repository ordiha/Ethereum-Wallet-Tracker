async function getBalance() {
  const address = document.getElementById("addressInput").value;
  const apiKey = "5HZIJ86E2MMW1X11QBJ95YF2DFM69H5AKY";
  const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Loading...";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "1") {
      const balanceInEth = Number(data.result) / 1e18;
      resultDiv.innerHTML = `Balance: ${balanceInEth.toFixed(5)} ETH`;
    } else {
      resultDiv.innerHTML = "Error fetching balance. Please check the address.";
    }
  } catch (error) {
    resultDiv.innerHTML = "Error: " + error.message;
  }
}
