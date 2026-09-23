import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { Follower } from './follower.def';  
import { getFollowers, addFollower, removeFollower, updateFollower } from './storage/followerRepo';
import { NECKLACES, isNecklaceId, type NecklaceId } from './data/necklaces';
import { DEMONS, findDemon, isDemonId, type DemonId } from './data/demons';
import { SKINS, findSkin, isSkinId, type SkinId } from './data/skins';
import { OUTFITS, findOutfit, isOutfitId, type OutfitId } from './data/outfits';

let editingFollowerId: string | null = null;
const skinPicker = document.getElementById('skinPicker') as HTMLDivElement;
const outfitPicker = document.getElementById('outfitPicker') as HTMLDivElement;

const addFollowerModal = document.getElementById('addFollowerModal') as HTMLDialogElement;
const addFollowerForm = document.getElementById('addFollowerForm') as HTMLFormElement;
const followerList = document.getElementById('followerList') as HTMLUListElement;
const necklaceSelect = document.getElementById('necklaceSelect') as HTMLSelectElement;
const demonSelect = document.getElementById('demonSelect') as HTMLSelectElement;

console.log('Cult of the Lamb Follower Tracker ready!')

//Register Followers Buttons
const addFollowerButton = document.getElementById('addFollowerButton') as HTMLButtonElement;
const cancelAddFollowerButton = document.getElementById('cancelAddFollowerButton') as HTMLButtonElement;

//open and close
addFollowerButton.addEventListener('click', () => addFollowerModal.showModal());
cancelAddFollowerButton.addEventListener('click', () => addFollowerModal.close());

//****************************************************** */
//********************* Submit***************************
//******************************************************** */

addFollowerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(addFollowerForm);

  const values = {
    name: String(data.get('name')).trim(),
    level: Number(data.get('level')),
    skin: String(data.get('skin')).trim(),
    outfit: String(data.get('outfit')).trim(),
    necklaceId: readNecklaceId(data),
    demonId: readDemonId(data),
    isMarried: data.has('isMarried'),
    isFavorite: data.has('isFavorite'),
    isDead: data.has('isDead'),
  };

  const existing = getFollowers().find((f) => f.id === editingFollowerId);

  if (existing) {
    updateFollower({ ...existing, ...values });
  } else {
    addFollower({
      ...values,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      role: null,
      traits: [],
    });
  }

  editingFollowerId = null;
  addFollowerForm.reset();
  addFollowerModal.close();
  render();
});

function fillForm(follower: Follower): void {
  const fields = addFollowerForm.elements;
  (fields.namedItem('name') as HTMLInputElement).value = follower.name;
  (fields.namedItem('level') as HTMLInputElement).value = String(follower.level);
  (fields.namedItem('skin') as RadioNodeList).value = follower.skin;
  (fields.namedItem('outfit') as RadioNodeList).value = follower.outfit;
  (fields.namedItem('necklaceId') as HTMLSelectElement).value = follower.necklaceId ?? '';
  (fields.namedItem('demonId') as HTMLSelectElement).value = follower.demonId ?? '';
  (fields.namedItem('isFavorite') as HTMLInputElement).checked = follower.isFavorite;
  (fields.namedItem('isDead') as HTMLInputElement).checked = follower.isDead;
  (fields.namedItem('isMarried') as HTMLInputElement).checked = follower.isMarried;
}

//******************************************************* */
//*****************Render Followers*********************
//******************************************************* */

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
  
  const label = document.createElement('div');
  const demon = findDemon(follower.demonId);
  const skin = findSkin(follower.skin);
  const necklace = NECKLACES.find(n => n.id === follower.necklaceId);


  const outfit = findOutfit(follower.outfit);

  const editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.className = 'btn btn-xs btn-primary';
      editBtn.innerHTML = `<i class="bi bi-pencil"></i>`;

  editBtn.addEventListener('click', () => {
    editingFollowerId = follower.id;
    fillForm(follower);
    addFollowerModal.showModal();
  });



  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'btn btn-xs btn-error';
  deleteBtn.innerHTML = '<i class="bi bi-trash3"></i>';

  deleteBtn.addEventListener('click', () => {
    removeFollower(follower.id);
    render();
  });

    const card = document.createElement('div');
    card.className = 'card bg-base-200 shadow-md w-full';

    card.innerHTML=`
    <li class="max-w-200 rounded-2xl">
      <div>
          <h2 class="text-lg font-bold p-2 border border-base-300 flex items-center">
            <img src="${skin?.imageUrl ?? ''}" alt="${skin?.name ?? ''}" title="${skin?.description ?? ''}" class="w-15 h-15 m-2" />
            <span class="m-2">${follower.name} ~ Lv ${follower.level}</span>
            <div class="card-actions"></div>
          </h2>
          <div class="flex flex-row border border-base-300">
            <div class="flex flex-col w-full h-full">
              <img src="${outfit?.imageUrl ?? ''}" alt="${outfit?.name ?? ''}" title="${outfit?.description ?? ''}" class="w-full h-full object-contain p-4" />
              <span class="text-center text-xs p-4">${outfit?.name ?? ''}</span>
            </div>
            <div class="flex flex-col w-full h-full">
              <img src="${necklace?.imageUrl ?? ''}" alt="${necklace?.name ?? ''}" title="${necklace?.description ?? ''}" class="w-30 h-30 object-contain border border-base-300 p-4" />
              <span class="text-center text-xs p-4">${necklace?.name ?? ''}</span>
            </div>
            <div class="flex flex-col w-full h-full">
              <img src="${demon?.imageUrl ?? ''}" alt="${demon?.name ?? ''}" title="${demon?.description ?? ''}" class="w-30 h-30 object-contain border border-base-300 p-4" />
              <span class="text-center text-xs p-4">${demon?.name}</span>
            </div>
          </div>
          <div class="flex max-w-full">
            <div class="card-status flex gap-2 text-lg"></div>

          </div>
      </div>
    </li>
    `
    card.querySelector('.card-actions')!.append(editBtn, deleteBtn);
    const status = card.querySelector('.card-status')!;
if (follower.isMarried) status.append(statusIcon('heart-fill', 'Married'));
if (follower.isFavorite) status.append(statusIcon('star-fill', 'Favorite'));
if (follower.isDead) status.append(statusIcon('emoji-dizzy-fill', 'Dead'));

  return card;
}

//Necklaces
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

//demons
    function populateDemonSelect(): void {
    // Implementation for populating demon select options
    for (const demon of DEMONS) {
        const option = document.createElement('option');
        option.value = demon.id;
        option.textContent = demon.name;
        demonSelect.append(option);
    }   
    }

    function readDemonId(data: FormData): DemonId | null {
    const raw = String(data.get('demonId'));
    return DEMONS.some(demon => demon.id === raw) ? raw as DemonId : null;
    }

    //skins
   function populateSkinPicker(): void {
  for (const skin of SKINS) {
    const tile = document.createElement('label');
    tile.className =
      'cursor-pointer rounded-lg border-2 border-transparent p-1 ' +
      'has-[:checked]:border-primary has-[:checked]:bg-base-300';
    tile.title = skin.name;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'skin';
    radio.value = skin.id;
    radio.required = true;
    radio.className = 'sr-only';

    const img = document.createElement('img');
    img.src = skin.imageUrl;
    img.alt = skin.name;
    img.className = 'w-full aspect-square object-contain';

    const caption = document.createElement('span');
    caption.textContent = skin.name;
    caption.className = 'block text-center text-xs';

    tile.append(radio, img, caption);
    skinPicker.append(tile);
  }
}

//outfits
function populateOutfitPicker(): void {
  for (const outfit of OUTFITS) {
    const tile = document.createElement('label');
    tile.className =
      'cursor-pointer rounded-lg border-2 border-transparent p-1 ' +
      'has-[:checked]:border-primary has-[:checked]:bg-base-300';
    tile.title = outfit.name;
    
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'outfit';
    radio.value = outfit.id;
    radio.required = true;
    radio.className = 'sr-only';

    const img = document.createElement('img');
    img.src = outfit.imageUrl;
    img.alt = outfit.name;
    img.className = 'w-full aspect-square object-contain';

    const caption = document.createElement('span');
    caption.textContent = outfit.name;
    caption.className = 'block text-center text-xs';

    tile.append(radio, img, caption);
    outfitPicker.append(tile);
  }
}

function catalogImage(item: CatalogItem): HTMLImageElement {
  const img = document.createElement('img');
  img.src = item.imageUrl;
  img.alt = item.name;
  img.title = item.description;
  img.className = 'w-10 h-10';
  return img;
}

function statusIcon(icon: string, label: string): HTMLElement {
  const el = document.createElement('i');
  el.className = `bi bi-${icon}`;
  el.title = label;
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', label);
  return el;
}

addFollowerModal.addEventListener('close', () => {
  editingFollowerId = null;
  addFollowerForm.reset();
});

populateOutfitPicker();
populateSkinPicker();
populateNecklaceSelect();
populateDemonSelect();  
render();

