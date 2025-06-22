export async function getResults(searchTerm: string) {
  try {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
    );
    const results = await data.json();
    console.log(results);
    return results;
  } catch (error) {
    console.error(error);
  }
}
