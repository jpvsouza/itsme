export default function Contact() {
  return(
    <div id='contact' className='card border-top rounded shadow p-3 mb-5 bg-body rounded container'>
      <div className='row'>
        <div className='col'>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <img id="linkGoogle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="link do gmail" />
          </a>
        </div>
        <div className='col'>
        <a href="https://www.linkedin.com/in/joaopauloveloso/"  target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" alt="link do linkedin" />
        </a>
        </div>
        <div className='col'>
        <a href="https://github.com/jpvsouza"  target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="link do github" />
        </a>
        </div>
      </div>
    </div>
  );
}