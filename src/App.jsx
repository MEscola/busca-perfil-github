import { useState } from 'react'
import { Styled } from './styles'
import { FaGithub, FaSearch } from 'react-icons/fa'

function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [bio, setBio] = useState(null);
  const [error, setError] = useState(null); // Estado para o erro

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error // Lança erro se a requisição falhar
      }
      const data = await response.json();
      setProfile(data); // Armazena o perfil encontrado
      setBio(data.bio);
      setError(null); // Limpa o erro anterior (se houver)
    } catch (err) {
      setError(
        <>
          Nenhum perfil foi encontrado com esse nome de usuário.
          <br />
          Tente Novamente.
        </>
      ); // Define a mensagem de erro
      setProfile(null); // Limpa o perfil (caso exista um anterior)
    }
  };

  return (
      <Styled.Container>
        <Styled.Header>
        <FaGithub size={40} color="#FFFFFF" />
        <Styled.Title>Perfil</Styled.Title>
      </Styled.Header>

      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input
          type="text"
          placeholder = "Digite um usuário do Github"
          value ={username}
          onChange = {(e) => setUsername(e.target.value)}
        />
        
        <Styled.Button type="submit">
          <FaSearch size={20} color="#DDDDDD" />

        </Styled.Button>
        
      </Styled.Form>  



      {(error || profile) && (
  <Styled.ProfileCard>
    {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}

    {profile && (
      <>
        <Styled.ProfileImage src={profile.avatar_url} alt={profile.name} />
        
        <Styled.ProfileInfo>
          <Styled.ProfileName>{profile.name}</Styled.ProfileName>
          <Styled.ProfileBio>{profile.bio}</Styled.ProfileBio>
          <Styled.ProfileUsername>@{profile.login}</Styled.ProfileUsername>
          <Styled.ProfileLink href={profile.html_url} target="_blank" rel="noopener noreferrer">
            Ver perfil no GitHub
          </Styled.ProfileLink>
        </Styled.ProfileInfo>
      </>
    )}
  </Styled.ProfileCard>
)}
  
    </Styled.Container>
  )
}

export default App
