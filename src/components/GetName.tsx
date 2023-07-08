function GetName({ setName }: any) {
  function buttonHandler(e: any) {
    e.preventDefault();
    setName((document.getElementById('my-name') as HTMLInputElement).value);
    document.getElementById('form-get-name')?.classList.add('none');
  }

  return (
    <form id="form-get-name">
      <label htmlFor="my-name">Qual o seu nome ?</label>
      <input id="my-name" type="text" />
      <button onClick={ (e) => buttonHandler(e) }>Esse é o meu nome!</button>
    </form>
  );
}

export default GetName;
