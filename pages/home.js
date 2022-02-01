import Link from 'next/link';
//As otimizações da tag "Link" não ocorrem no ambiente local, mas no ambiente de produção
//otimizações para página dinãmica funcionar como uma single-page estática
function Home() {
  return(
    <Link ref="/portifolio">
    <h1>Esta é a Homepage do site</h1>
    <h2>Feel free to navigate</h2>
    <p>Parágrafo único da página principal</p>
    </Link>
  );
}

export default Home
