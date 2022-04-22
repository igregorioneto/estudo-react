import React, {useState, useEffect} from "react";

export default function App() {
  const [repositories, setRespositories] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://api.github.comn/users/igregorioneto/repos');
    const data = await response.json();
    setRespositories(data); 
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });

    setRespositories(newRepositories);
  }

  return(
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span>(Favorito)</span>}
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
        </li>
      ))}
    </ul>
  );
}