document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id
    fetch(`/${id}`,{method:'DELETE'}).then(()=> {
      event.target.closest('li').remove()
    })
  }
})