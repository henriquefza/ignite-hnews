import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts () {
  return (
    <>
    <Head>
       <title>Posts | Hnews</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time>20 de março de 2022</time>
          <strong>Criando a página de posts</strong>
          <p>Aqui vamos criar a página de posts, adicionando todo o conteudo</p>
        </a>
        <a href="#">
          <time>20 de março de 2022</time>
          <strong>Criando a página de posts</strong>
          <p>Aqui vamos criar a página de posts, adicionando todo o conteudo</p>
        </a>
        <a href="#">
          <time>20 de março de 2022</time>
          <strong>Criando a página de posts</strong>
          <p>Aqui vamos criar a página de posts, adicionando todo o conteudo</p>
        </a>""
      </div>
    </main>

  </>
  );
}