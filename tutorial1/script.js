const contractAddress='0x7759fF3877402e9Ec452578caDB2CFF983aDdEE9';

const contractABI=[{"inputs":[{"internalType":"string","name":"_note","type":"string"}],"name":"setNote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getNote","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];


let contract;
let signer;
  const provider = new ethers.providers.Web3Provider(window.ethereum, 80001); // matic mumbai chain_id

  provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
      signer = provider.getSigner(accounts[0]);
      contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
    });
  });

  async function getNote() {
    console.log(await contract.getNote());
  }
  
  async function setNote() {
    const note = document.getElementById("inputNote").value;
    await contract.setNote(note);
  }