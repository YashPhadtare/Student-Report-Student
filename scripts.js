// Toggle name input based on "Remain anonymous" selection
function toggleNameInput() {
  const nameInput = document.getElementById("name");
  const anonymousOption = document.querySelector(
    'input[name="identity"][value="anonymous"]'
  );
  nameInput.disabled = anonymousOption.checked;
  if (anonymousOption.checked) {
    nameInput.value = "";
  }
}

// Show or hide group members input based on selection
function toggleGroupInput(isGroup) {
  const groupMembersInput = document.getElementById("group-members");
  groupMembersInput.style.display = isGroup ? "block" : "none";
}

// Show tick mark after file is uploaded
function showTickMark() {
  const tickMark = document.getElementById("tick-mark");
  tickMark.style.display = "inline";
}

// Add group member after confirmation
function addGroupMember() {
  const memberName = document.getElementById("group-member").value;
  if (memberName) {
    const permission = confirm(
      `Do you have permission from ${memberName} to include them?`
    );
    if (permission) {
      const memberList = document.getElementById("member-list");
      const listItem = document.createElement("li");
      listItem.textContent = memberName;
      memberList.appendChild(listItem);
      document.getElementById("group-member").value = "";
    }
  }
}

// Toggle menu display for the three-dash icon
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
}
