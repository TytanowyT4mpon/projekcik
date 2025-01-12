import Image from "next/image";
import  "./page.css";

export default function Home() {
  return (
    <div>
      <nav>
        <div className="navigation">
          <div><svg width="95" height="24" viewBox="0 0 95 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.76 20.78C19.5 21.06 19.09 21.35 18.53 21.65C17.97 21.93 17.32 22.19 16.58 22.43C15.86 22.67 15.12 22.86 14.36 23C13.6 23.16 12.88 23.24 12.2 23.24C10.4 23.24 8.78 22.98 7.34 22.46C5.9 21.92 4.67 21.18 3.65 20.24C2.63 19.28 1.85 18.15 1.31 16.85C0.77 15.55 0.5 14.13 0.5 12.59C0.5 10.57 0.8 8.82 1.4 7.34C2.02 5.84 2.85 4.6 3.89 3.62C4.95 2.62 6.16 1.88 7.52 1.4C8.9 0.919999 10.34 0.679999 11.84 0.679999C13.26 0.679999 14.56 0.839999 15.74 1.16C16.92 1.46 17.92 1.84 18.74 2.3L17.33 6.35C16.97 6.15 16.49 5.95 15.89 5.75C15.29 5.55 14.68 5.39 14.06 5.27C13.44 5.13 12.89 5.06 12.41 5.06C11.21 5.06 10.15 5.21 9.23 5.51C8.31 5.81 7.53 6.26 6.89 6.86C6.27 7.46 5.8 8.21 5.48 9.11C5.16 9.99 5 11.02 5 12.2C5 13.24 5.18 14.18 5.54 15.02C5.9 15.84 6.4 16.54 7.04 17.12C7.7 17.7 8.47 18.14 9.35 18.44C10.25 18.74 11.24 18.89 12.32 18.89C12.94 18.89 13.51 18.85 14.03 18.77C14.55 18.67 14.99 18.52 15.35 18.32V15.65H11.54V11.45H19.76V20.78ZM22.2116 23L32.1716 0.0499986H32.4116L42.3716 23H37.3316L30.9716 6.86L34.1216 4.7L26.5016 23H22.2116ZM29.0216 15.02H35.6516L37.1816 18.68H27.6716L29.0216 15.02ZM43.1902 20.84C43.1902 20.22 43.4102 19.7 43.8502 19.28C44.3102 18.86 44.8102 18.65 45.3502 18.65C45.8502 18.65 46.3202 18.86 46.7602 19.28C47.2202 19.7 47.4502 20.22 47.4502 20.84C47.4502 21.5 47.2202 22.03 46.7602 22.43C46.3202 22.81 45.8502 23 45.3502 23C44.8102 23 44.3102 22.81 43.8502 22.43C43.4102 22.03 43.1902 21.5 43.1902 20.84ZM50.7465 23V0.019999H50.7765L63.0465 17.42L61.1865 17L73.4265 0.019999H73.4865V23H69.1365V9.83L69.4065 12.08L61.9365 22.7H61.8765L54.1965 12.08L54.9465 10.01V23H50.7465ZM79.1938 0.919998H94.2538V5.12H83.5438V9.83H93.0238V14.03H83.5438V18.8H94.6738V23H79.1938V0.919998Z" fill="url(#paint0_linear_301_47)"/>
                <defs>
                <linearGradient id="paint0_linear_301_47" x1="-1" y1="5" x2="170.697" y2="93.6403" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8F00FF"/>
                <stop offset="1" stop-color="white"/>
                </linearGradient>
                </defs>
              </svg>
          </div>

            <div>
              <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Lista Gier</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Zaloguj Sie</li>
              </ul>
            </div>
        </div>
      </nav>

      <div className="hero">
        <h1>A COMMUNITY <br/> FOR GAMERS BY<br/> GAMER</h1>
        <p>Bądź na bieżąco ze Światem gier,<br/> oznaczaj i planuj kolejne rozgrywki</p>

        <div>
          <button type="button" className="join">Dołącz do nas</button>
          <button type="button" className="login">Zaloguj się</button>
        </div>
      </div>

      <div className="section1">

      <div className="bld">
                <h2>ZBUDUJ<br/> SWOJĄ <br/>LISTĘ</h2>
                <p>Stwórz swoją listę gier, oznaczaj ograne <br/> tytuły i udostępnij swoją bibliotekę. Bądź na <br/>bieżąco w świecie gier.</p>
                <a class="joinus">Dołącz do nas<span class=""><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM1 9L29 9V7L1 7L1 9Z" fill="url(#paint0_linear_301_81)"/>
<defs>
<linearGradient id="paint0_linear_301_81" x1="2.5" y1="7.5" x2="31" y2="10.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#8F00FF"/>
<stop offset="1" stop-color="#BA62FF"/>
</linearGradient>
</defs>
</svg></span></a>
                </div>

        <div className="pad">
          <img src="pad.png"></img>
        </div>

              
                <div className="act">
                  <h2>BĄDŹ <br/> NA <br/> BIEŻĄCO</h2>
                <div className="icons">
                      <div className="icon1">
                        <img src="/icon1.png"></img>
                      </div>
                      <div className="icon2">
                      <img src="/icon2.png"></img>
                      </div>
                      <div className="icon3">
                      <img src="/icon3.png"></img>
                      </div>
                    </div>
                </div>
        

      </div>

    
      <div className="section2">
          <h1>NIE CZEKAJ <br/>ZBUDUJ LISTĘ <br/>JUŻ DZIŚ</h1>
          <button type="button" className="join">Utwórz konto</button>
      </div>

      <div className="section3">
          <h1>TO MUSISZ OGRAĆ</h1>

          <div className="container">
              <div className="first box">
                <div className="people">
                  <p>2137 osób</p>
                          <div><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="5.5" cy="5.5" r="5.5" fill="#00FF85"/>
                          </svg>
                          </div>
                </div>
              </div>
              <div className="two box">
              <div className="people">
                  <p>12 osób</p>
                          <div><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="5.5" cy="5.5" r="5.5" fill="#00FF85"/>
                          </svg>
                          </div>
                </div>
              </div>
              <div className="three box">
              <div className="people">
                  <p>0 osób</p>
                          <div><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="5.5" cy="5.5" r="5.5" fill="#00FF85"/>
                          </svg>
                          </div>
                </div>
              </div>
              <div className="four box">
              <div className="people">
                  <p>420 osób</p>
                          <div><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="5.5" cy="5.5" r="5.5" fill="#00FF85"/>
                          </svg>
                          </div>
                </div>
              </div>
              <div className="five box">
              <div className="people">
                  <p>1 osoba</p>
                          <div><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="5.5" cy="5.5" r="5.5" fill="#00FF85"/>
                          </svg>
                          </div>
                </div>
              </div>
              <div className="six box">
              <div className="people">
                  <p>2 osoby</p>
                          <div><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="5.5" cy="5.5" r="5.5" fill="#00FF85"/>
                          </svg>
                          </div>
                </div>
              </div>
          </div>
         
      </div>
      <div className="section4">

      <h2>NASZE <br/> PORADNIKI</h2>

      </div>


      <div className="section5">
        <h2>DOŁĄCZ DO <br/> SPOŁECZNOŚCI</h2>
        <button type="button" className="join">Utwórz konto</button>
      </div>

    </div>




  );
}
