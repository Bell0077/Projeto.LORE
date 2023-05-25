import Image from 'next/image'
import './estilo.css'
export default function Home() {
  return (
    <main>   
        <div id="lore">
            <span id="L">L</span>
            <span id="O" onclick="lor()">O</span>
            <span id="R">R</span>
            <span id="E">E</span>
        </div>
        <div id="login" class="loginForm">
            <form>
                <input type="text" required/>
                <input type="password" required/>
            </form>
        </div>
        <script src="lore.js"></script>
    </main>
  )
}
