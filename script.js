const player = document.querySelector('#player')
const theball = document.querySelector('#theball')

player.addEventListener('collide', e => {
    console.log("Collider (below):");
    console.log(e.detail.target.el);
    console.log("Collider ID: " + e.detail.target.el.id);
    
    console.log("Collided with (below):");
    console.log(e.detail.body.el);
    
    e.detail.target.el;  // Original entity, the collider
    e.detail.body.el;    // Entity that was collided with
    e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
    e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
});
