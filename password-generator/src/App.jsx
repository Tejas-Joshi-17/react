import { useState, useCallback, useEffect, useRef } from "react"


function App() {

  const [length, setLength] = useState(8);  
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charactersAllowed, setCharactersAllowed] = useState(false);
  let [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)
  
  const changeInputRange = (input) =>  {
    setLength(input)
  }

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charactersAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  }, [length, numberAllowed, charactersAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 999);
    globalThis.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]);

  return (
    <div className='mt-4 w-50 text-center mx-auto'>
      <p className="text-center fs-2">Password Generator</p>
      <div className="container p-2">
        <div className="row">
          <div className="input-group mb-3">
            <input 
              type="text" 
              value={password} 
              className="form-control" 
              placeholder="password" 
              aria-label="Recipient’s username" 
              aria-describedby="button-addon2"
              ref={passwordRef}
            />
            <button 
              className="btn btn-primary" 
              type="button" 
              id="button-addon2" 
              onClick={copyPasswordToClipboard}>Copy</button>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <input 
              type="range" 
              className="form-range" 
              onInput={(e) => changeInputRange(e.target.value)} 
              min="0" 
              max="20" 
              value={length} 
              id="range4"/>
          </div>
          <div className="col-2">
            <label 
              htmlFor="range4" 
              className="form-label">
              Length [{length}]
            </label>
          </div>
          <div className="col-2">
            <div className="form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                defaultChecked={numberAllowed}
                value="" 
                id="isNumberEnabled"
                onChange={() => setNumberAllowed((prev) => !prev)}  
              />
              <label 
                className="form-check-label" 
                htmlFor="isNumberEnabled">
                Numbers
              </label>
            </div>
          </div>
          <div className="col-4">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                defaultChecked={charactersAllowed}
                value="" 
                id="isCharactersEnabled"
                onChange={() => setCharactersAllowed((prev) => !prev)}
              />
              <label 
                className="form-check-label" 
                htmlFor="isCharactersEnabled">
                Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App;