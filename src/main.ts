import './style.css'
import type { Follower } from './follower.def'  
import { getFollowers, addFollower, removeFollower } from './storage/followerRepo'
import { NECKLACES, isNecklaceId, type NecklaceId } from './data/necklaces';

const addFollowerModal = document.getElementById('addFollowerModal') as HTMLDialogElement;
const addFollowerForm = document.getElementById('addFollowerForm') as HTMLFormElement;
const followerList = document.getElementById('followerList') as HTMLUListElement;
const necklaceSelect = document.getElementById('necklaceSelect') as HTMLSelectElement;

console.log('Cult of the Lamb Follower Tracker ready!')

//Register Followers Buttons
const addFollowerButton = document.getElementById('addFollowerButton') as HTMLButtonElement;
const cancelAddFollowerButton = document.getElementById('cancelAddFollowerButton') as HTMLButtonElement;

//open and close
addFollowerButton.addEventListener('click', () => addFollowerModal.showModal());
cancelAddFollowerButton.addEventListener('click', () => addFollowerModal.close());

// Submit
addFollowerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(addFollowerForm);

  const follower: Follower = {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    role: null,
    traits: [],
    name: String(data.get('name')).trim(),
    level: Number(data.get('level')),
    skin: String(data.get('skin')).trim(),
    outfit: String(data.get('outfit')).trim(),
    necklaceId: readNecklaceId(data),
    demonId: String(data.get('demonId')).trim() || null,
    isMarried: data.has('isMarried'),
    isFavorite: data.has('isFavorite'),
    isDead: data.has('isDead'),
  };

  addFollower(follower);
  addFollowerForm.reset();
  addFollowerModal.close();
  render();
  console.log('Follower added:', follower);
  console.log(getFollowers());
});

// Render Followers
function render(): void {
    followerList.replaceChildren();
    for (const follower of getFollowers()){
        // Create list item for each follower
        followerList.append(renderFollower(follower));
    }
}

function renderFollower(follower: Follower): HTMLLIElement {
  const item = document.createElement('li');
  item.className = 'card bg-base-200 p-4 flex flex-row items-center justify-between';

  const label = document.createElement('span');
  label.textContent = `${follower.name} · Lv ${follower.level} · ${follower.skin}`;

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'btn btn-sm btn-error';
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', () => {
    removeFollower(follower.id);
    render();
  });

  item.append(label, deleteBtn);
  return item;
}

function populateNecklaceSelect(): void {
  for (const necklace of NECKLACES) {
    const option = document.createElement('option');
    option.value = necklace.id;
    option.textContent = necklace.name;
    necklaceSelect.append(option);
  }
}

function readNecklaceId(data: FormData): NecklaceId | null {
  const raw = String(data.get('necklaceId'));
  return isNecklaceId(raw) ? raw : null;
}

populateNecklaceSelect();
render();

