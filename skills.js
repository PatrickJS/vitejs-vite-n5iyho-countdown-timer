const availableSkills = [
  { id: '120000300', name: 'Charlotte α', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_120000300.png' },
  { id: '120000110', name: 'Erinse β', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_120000110.png' },
  { id: '120000400', name: 'Einrain α', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_120000400.png' },
  { id: '133001000', name: 'Foreign Bandit Leader Brown Bear', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_133001000.png' },
  { id: '131005100', name: 'Elite Knights', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_131005100.png' },
  { id: '120000510', name: 'Electra β', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_120000510.png' },
  { id: '120000410', name: 'Einrain β', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_120000410.png' },
  { id: '131002100', name: 'Providence Eye', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_131002100.png' },
  { id: '131000500', name: 'Roaring Gold', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_131000500.png' },
  { id: '131001600', name: 'Small Fighter', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_131001600.png' },
  { id: '131001800', name: 'Valley Vanguard', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_131001800.png' },
  { id: '131003300', name: 'Foreign bandit scout fox', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_131003300.png' },
  { id: '120000010', name: 'Fest β', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_120000010.png' },
  { id: '131003800', name: 'Pryle Anima', img: 'https://raw.githubusercontent.com/whotookzakum/bpassets/main/UI/Icon/Imagine/Battle/UI_Icon_131003800.png' },
];

let groupA = [];
let groupB = [];

function renderSkillSelector() {
  const skillContainer = document.getElementById('skill-container');
  skillContainer.innerHTML = availableSkills.map(skill => `
    <div class="skill-item flex items-center space-x-2">
      <img src="${skill.img}" alt="${skill.name}" class="w-8 h-8">
      <span>${skill.name}</span>
      <button class="add-to-group bg-blue-500 text-white px-2 py-1 rounded" data-id="${skill.id}" data-group="A">Add to Group A</button>
      <button class="add-to-group bg-green-500 text-white px-2 py-1 rounded" data-id="${skill.id}" data-group="B">Add to Group B</button>
    </div>
  `).join('');

  document.querySelectorAll('.add-to-group').forEach(button => {
    button.addEventListener('click', (event) => {
      const skillId = event.target.getAttribute('data-id');
      const group = event.target.getAttribute('data-group');
      addToGroup(skillId, group);
    });
  });
}

function addToGroup(skillId, group) {
  const skill = availableSkills.find(skill => skill.id === skillId);

  if (group === 'A' && !groupA.includes(skill)) {
    groupA.push(skill);
  } else if (group === 'B' && !groupB.includes(skill)) {
    groupB.push(skill);
  }

  renderSelectedGroups();
}

function renderSelectedGroups() {
  const groupAContainer = document.getElementById('group-a-container');
  const groupBContainer = document.getElementById('group-b-container');

  groupAContainer.innerHTML = groupA.map(skill => `
    <div class="group-item flex items-center space-x-2">
      <img src="${skill.img}" alt="${skill.name}" class="w-8 h-8">
      <span>${skill.name}</span>
      <button class="remove-from-group bg-red-500 text-white px-2 py-1 rounded" data-id="${skill.id}" data-group="A">Remove</button>
    </div>
  `).join('');

  groupBContainer.innerHTML = groupB.map(skill => `
    <div class="group-item flex items-center space-x-2">
      <img src="${skill.img}" alt="${skill.name}" class="w-8 h-8">
      <span>${skill.name}</span>
      <button class="remove-from-group bg-red-500 text-white px-2 py-1 rounded" data-id="${skill.id}" data-group="B">Remove</button>
    </div>
  `).join('');

  document.querySelectorAll('.remove-from-group').forEach(button => {
    button.addEventListener('click', (event) => {
      const skillId = event.target.getAttribute('data-id');
      const group = event.target.getAttribute('data-group');
      removeFromGroup(skillId, group);
    });
  });

  // Update timeline with the selected skills
  updateTimeline();
}

function removeFromGroup(skillId, group) {
  if (group === 'A') {
    groupA = groupA.filter(skill => skill.id !== skillId);
  } else if (group === 'B') {
    groupB = groupB.filter(skill => skill.id !== skillId);
  }

  renderSelectedGroups();
}

function updateTimeline() {
  // Placeholder function to update the timeline with the selected skills.
  // This will be implemented in the timeline management file.
}

// Initial render of the skill selector
renderSkillSelector();