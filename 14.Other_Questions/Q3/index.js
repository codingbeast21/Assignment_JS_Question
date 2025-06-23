  function getUniqueCharacters(str) {
    return [...new Set(str)].join('');
  }

  console.log(getUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

