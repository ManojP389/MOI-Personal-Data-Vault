const axios = require("axios");

const RPC_URL = "https://dev.voyage-rpc.moi.technology/devnet/";

async function callRPC(method, params = []) {
  try {
    const response = await axios.post(RPC_URL, {
      jsonrpc: "2.0",
      id: 1,
      method: method,
      params: params
    });

    console.log("Response:", JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error("Error:", error.message);
  }
}

async function main() {
  console.log("🚀 Connecting to MOI RPC...\n");

  await callRPC("participant.get", [
  "0x031d08a52f3410c2fa4d2dd74a6a5a15b41a086ec3eae48b96dfe5b207ba036e"
]);
}

main();