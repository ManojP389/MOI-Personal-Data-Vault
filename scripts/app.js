require("dotenv").config();

class Vault {
  constructor(owner) {
    this.owner = owner;
    this.skills = [];
    this.certificates = [];
    this.reputation = 0;
    this.permissions = {}; // who can see what
  }

  addSkill(skill) {
    this.skills.push(skill);
    console.log(`Skill added: ${skill}`);
  }

  addCertificate(cert) {
    this.certificates.push(cert);
    console.log(`Certificate added: ${cert}`);
  }

  grantAccess(user, fields) {
    this.permissions[user] = fields;
    console.log(`Access granted to ${user}: ${fields}`);
  }

  viewData(requester) {
    const allowed = this.permissions[requester] || [];

    return {
      skills: allowed.includes("skills") ? this.skills : [],
      certificates: allowed.includes("certificates") ? this.certificates : []
    };
  }
}

async function main() {
  console.log("🚀 MOI Vault Demo Starting...\n");

  // Create users
  const user = "0xUSER_1";
  const recruiter = "0xRECRUITER_1";

  // Create vault
  const vault = new Vault(user);
  console.log("Vault created for:", user);

  // Add skill
  vault.addSkill("Blockchain");

  // Add certificate
  vault.addCertificate("AWS Certified");

  // Grant access
  vault.grantAccess(recruiter, ["skills", "certificates"]);

  // Recruiter views data
  const data = vault.viewData(recruiter);

  console.log("\n👀 Recruiter View:");
  console.log(data);
}

main();