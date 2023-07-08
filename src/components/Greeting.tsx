function Greeting({ name }: any) {
  return (
    <h1 className="greeting">
      { `Olá, ${name}` }
      <img alt="imagem de um trevo de 4 folhas" src="https://i.imgur.com/rqvLd3q.png" />
    </h1>
  );
}

export default Greeting;
