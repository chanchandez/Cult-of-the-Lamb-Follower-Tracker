import './style.css'
import type { Follower } from './follower.def'  
import { getFollowers, addFollower, removeFollower, updateFollower } from './storage/followerRepo'
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
  label.textContent = `${follower.name} · Lv ${follower.level}`;

  const demon = findDemon(follower.demonId);
  if (demon) label.append(catalogImage(demon));

  const skin = findSkin(follower.skin);
  if (skin) label.append(catalogImage(skin));

  const necklace = NECKLACES.find(n => n.id === follower.necklaceId);
  if (necklace) label.append(catalogImage(necklace)); 

  const outfit = findOutfit(follower.outfit);
  if (outfit) label.append(catalogImage(outfit));

const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'btn btn-sm btn-primary';
    editBtn.textContent = 'Edit';

editBtn.addEventListener('click', () => {
  editingFollowerId = follower.id;
  fillForm(follower);
  addFollowerModal.showModal();
});



    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn btn-sm btn-error';
    deleteBtn.textContent = 'X';

    deleteBtn.addEventListener('click', () => {
      removeFollower(follower.id);
      render();
    });

  item.append(label, editBtn, deleteBtn);
  return item;
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

addFollowerModal.addEventListener('close', () => {
  editingFollowerId = null;
  addFollowerForm.reset();
});

populateOutfitPicker();
populateSkinPicker();
populateNecklaceSelect();
populateDemonSelect();  
render();

