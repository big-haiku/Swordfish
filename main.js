// Function to simulate typewriter effect
function typeWriterEffect(message) {
    const textElement = document.querySelector('.text');
    const containerElement = document.querySelector('.container');
    let chars = message.split('');
    let currentCharIndex = 0;

    // Recursive function to reveal each character or HTML tag sequentially
    function typeNextChar() {
        let char = chars[currentCharIndex];
        if (char === '<') {
            // Handle HTML tags like <br>
            let endIndex = message.indexOf('>', currentCharIndex) + 1; // Searches for the next occurrence of > in the message string starting from currentCharIndex. This helps locate where the HTML tag ends. EndIndex is then calculated by adding 1 to the index of >, ensuring char now includes the complete HTML tag (<br> in this example).
            char = message.substring(currentCharIndex, endIndex); // Updates char to contain the substring from currentCharIndex to endIndex, which effectively captures the entire HTML tag, including < and >.
            currentCharIndex = endIndex;
        } else {
            currentCharIndex++;
        }
        textElement.innerHTML += char;

        // Scroll to the bottom of the container
        containerElement.scrollTop = containerElement.scrollHeight;

        if (currentCharIndex < chars.length) {
            setTimeout(typeNextChar, 0.01); // Adjust typing speed here (milliseconds)
        }
    }

    typeNextChar();
}

// Startup message:
const message =
"INITIALISING SERVER NODE<br>  ServerOS v4.8.1<br>  *************************************<br>  WARNING: YOU ARE ABOUT TO ACCESS<br>  SYSTEM ROOT PRIVILEGES<br>  *************************************<br><br>  ****** Systems Ignition ******<br>  Starting boot sequence  .  .  .  done<br>  Loading kernel modules  .  .  .  done<br>  Accessing node manifold  .  .  .  done<br>  Initialising subsystem prog  .  .  .  done<br>  Initialising subsystem test  .  .  .  done<br>  Establishing secure socket connection (23::CORE-NET)  .  .  .  done<br>  &nbsp;&nbsp;Server-status:: ACTIVE<br>  &nbsp;&nbsp;Connection-status:: SECURED<br>  Heap allocation initiated at block00123(cluster-alpha)<br>  Performing disk check  .  .  .  done<br>  Load dump available:<br>  &nbsp;&nbsp;&nbsp;&nbsp;Core Protocols Online<br>  &nbsp;&nbsp;&nbsp;&nbsp;Data Synchronization Enabled<br>  &nbsp;&nbsp;&nbsp;&nbsp;RAID status:: NORMAL<br>  Merging with GRID  .  .  .  done<br>  SYSTEM INTEGRITY:: NOMINAL<br><br>  ****** Core Operations ******<br>  Accessing resource pool  .  .  .  done<br>  Performing full system diagnostics  .  .  .  done<br>  &nbsp;&nbsp;&nbsp;&nbsp;Disk status:: HEALTHY<br>  &nbsp;&nbsp;&nbsp;&nbsp;CPU status:: STABLE<br>  &nbsp;&nbsp;&nbsp;&nbsp;Memory load:: 24%<br>  Initialising network adapters  .  .  .  done<br>  &nbsp;&nbsp;&nbsp;&nbsp;Adapter 1 (eth0):: ACTIVE<br>  &nbsp;&nbsp;&nbsp;&nbsp;Adapter 2 (eth1):: STANDBY<br>  Activating security protocols  .  .  .  done<br>  &nbsp;&nbsp;&nbsp;&nbsp;Firewall:: ACTIVE<br>  &nbsp;&nbsp;&nbsp;&nbsp;IDS/IPS:: RUNNING<br>  &nbsp;&nbsp;&nbsp;&nbsp;Encryption:: AES256 ENABLED<br>  Network latency test  .  .  .  completed<br>  Ping response time:: 20ms<br><br>  ****** Error Logs ******<br>  Error:: Initialising redundant failover node  .  .  .  failed<br>  Error:: Syncing user credentials with central auth  .  .  .  failed<br>  &nbsp;&nbsp;&nbsp;&nbsp;Critical:: Failed to access /user/db001<br>  Attempting to reroute processes  .  .  .  done<br>  Emergency purge protocols engaged  .  .  .  completed<br>  Clearing temporary cache files  .  .  .  done<br><br>  ****** Resource Allocation ******<br>  &nbsp;&nbsp;&nbsp;&nbsp;CPU usage:: 47%<br>  &nbsp;&nbsp;&nbsp;&nbsp;Memory usage:: 35%<br>  &nbsp;&nbsp;&nbsp;&nbsp;Swap file status:: STANDBY<br>  &nbsp;&nbsp;&nbsp;&nbsp;Network traffic:: 18%<br>  <br>  &nbsp;&nbsp;&nbsp;&nbsp;System Optimisation in progress  .  .  .  done<br>  <br>  Welcome to SERVER NODE ALPHA<br>  Operating within secure parameters<br>  Current uptime:: 00:12:47<br>  Performing routine background checks  .  .  .  <br>"

typeWriterEffect(message);



// Title Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector(".header");
    const navItems = document.querySelectorAll(".navitem");
    
    function animateText(element, targetText) {
        let iterations = 0;
        const length = targetText.length;

        function updateText() {
            element.innerText = targetText
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return targetText[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iterations < length) {
                iterations += 1 / 3;  // Adjust iterations increment for speed
                requestAnimationFrame(updateText);
            }
        }

        requestAnimationFrame(updateText);
    }

    // Animate header
    animateText(header, header.dataset.value);

    // Animate each navitem
    navItems.forEach(item => {
        const targetText = item.innerText;  // Store the target text for each nav item
        animateText(item, targetText);
    });
});

