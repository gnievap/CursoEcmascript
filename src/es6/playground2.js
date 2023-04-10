function* getId() {
    // Tu código aquí 👈
    let id = 1;
    while (true) {
      id++;
      yield id;
    }
  }
  
  const id = getId();
  console.log(id.next().value);
  console.log(id.next().value);
  console.log(id.next().value);