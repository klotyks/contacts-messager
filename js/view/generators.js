function generateContacts(contact) {
  return `<li
  href="#modal2"
  class="contact modal-trigger collection-item transparent waves-effect"
>
  <div class="container">
    <div class="row valign-wrapper">
      <div class="col s4">
        <span
          class="teal darken-1 teal-text text-lighten-4 pic circle center-align material-symbols-outlined"
          >person</span
        >
      </div>
      <div class="col s4">
        <span class=""><b>${contact.name} ${contact.surname}</b></span>
      </div>
      <div class="col s4">
        <span class="badge new">phone</span>
      </div>
    </div>
  </div>
</li>
`
}

function generateRecents(recent) {
  return `<li
  class="recent-call waves-effect collection-item avatar transparent z-depth-1"
>
  <i class="material-icons circle teal darken-3">person</i>
  <span class="title"><b>${recent.phonenumber}</b></span>
  <p>
    <i>${((Date.now() - recent.timestamp) / 1000).toFixed(0)} seconds ago</i>
  </p>
  <a href="#!" class="secondary-content">
    <i class="material-icons">phone</i>
  </a>
</li>
`
}

function generateFavourites(favourite) {
  return `<div class="card-panel teal lighten-2 waves-effect waves-light">
  <div class="center-align">
    <span
      class="transparent teal-text text-lighten-5 pic center-align material-symbols-outlined"
      >person</span
    >
  </div>
  <span class="white-text">${favourite.name} ${favourite.surname}</span>
</div>`
}
