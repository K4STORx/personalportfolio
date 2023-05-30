var linkedin = "https://www.linkedin.com/in/skylarwjackson/";
var email = 'mailto:skylarwjackson2@gmail.com';

help = [
  "<br>",
  "<a href='#' onClick='whoIsCMD();'>[ whois                    about the creator ]</a>",
  "<a href='#' onClick='projectsCMD();'>[ projects                 projects worked on ]</a>",
  "<a href='#' onClick='linkedinCMD();'>[ linkedin                 open linkedin profile ]</a>",
  "<a href='#' onClick='emailCMD();'>[ email                    contact through email ]</a>",
  "<a href='#' onClick='resumeCMD();'>[ resume                   resume viewer ]</a>",
  "<a href='#' onClick='clearCMD();'>[ clear                    clears terminal ]</a>",
  "<a href='#' onClick='creditsCMD();'>[ credits                  site information ]</a>",
  "<br>",
];

whois = [
  "<br>",
  "name: skylar jackson",
  "occupation: graduate with a degree in it networking and security",
  "interests: computers, self-learning coding skills, website development, "
];

projects = [
  "<br>",
  ">type or click project name for more information",
  "<br>",
  "<a href='#' onClick='propertiesmoveCMD();'>[ propertiesmove                    college capstone ]</a>",
  /** "<a href='#' onClick='winchestercpaCMD();'>[ winchestercpa                     accountant portfolio ]</a>", **/
  "<br>"
];

credits = [
  "<br>",
  `website was reworked from <a href="https://youtu.be/KtYby2QN0kQ" target="_blank" rel="noopener noreferrer">[ ForrestKnight's idea ]</a>`,
  'and quinn i guess...',
  "<br>"
];


//project pages
propertiesmove = [
  "<br>",
  '<span class="proptitle">name:</span> propertiesmove',
  '<span class="proptitle">type:</span> website',
  '<span class="proptitle">timeframe:</span> aug 18 2022 - may 6 2023',
  '<span class="proptitle">description:</span> a user-friendly public website that enables property owners to list <br>their houses for rent or sale for a timeframe, and allows prospective buyers <br>to easily search and contact them.',
  '<span class="proptitle">contribution:</span> as the team lead for the capstone project, i successfully supervised <br>and coordinated the development process, ensuring timely completion, maintaining <br>regular communication with the client, and providing guidance to the team throughout <br>the entire project.',
  '<span class="proptitle">link:</span> <a href ="https://www.propertiesmove.com/" target="_blank" rel="noopener noreferrer">[ propertiesmove.com ]</a>',
  '<span class="proptitle">      >backup link:</span> <a href ="http://web.archive.org/web/20230430222914/https://propertiesmove.com/" target="_blank" rel="noopener noreferrer">[ propertiesmove.archive ]</a>',
  "<br>"
]

/**winchestercpa = [
  "<br>",
  '<span class="proptitle">name:</span> winchestercpa',
  '<span class="proptitle">type:</span> website',
  '<span class="proptitle">description:</span> professional and informative personal website for an accounting and <br>consulting company based in Winchester, Virginia, showcasing their services and expertise.',
  '<span class="proptitle">contribution:</span> redesigned and optimized a one-page website to enhance its modernity <br>and cleanliness.',
  '<span class="proptitle">link:</span> <a href ="https://www.winchestercpa.com/" target="_blank" rel="noopener noreferrer">[ winchestercpa.com ]</a>',
  "<br>"
]**/

//custom banner designs for random gen
banner = [
  'Console in development',
  '[■■■■■□□□□□] 50%',
  '<br>',
  '<span class="eyes">  ⠤⠤⠤⠤⠤⠤⢤⣄⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>',
  '<span class="eyes">  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⠤⠶⠶⠶⠦⠤⠤⠤⠤⠤⢤⣤⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀</span>',
  '<span class="eyes">  ⠀⠀⠀⠀⢀⠄⢂⣠⣭⣭⣕⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⠀⠀⠀⠤⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉</span>',
  '<span class="eyes">  ⠀⠀⢀⠜⣳⣾⡿⠛⣿⣿⣿⣦⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣍⣀⣦⠦⠄⣀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>',
  '<span class="eyes">  ⠀⠠⣄⣽⣿⠋⠀⡰⢿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡿⠛⠛⡿⠿⣿⣿⣿⣿⣿⣿⣷⣶⣿⣁⣂⣤⡄⠀⠀⠀⠀⠀⠀</span>',
  '<span class="eyes">  ⢳⣶⣼⣿⠃⠀⢀⠧⠤⢜⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠟⠁⠀⠀⠀⡇⠀⣀⡈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠁⠐⠀⣀⠀⠀</span>',
  '<span class="eyes">  ⠀⠙⠻⣿⠀⠀⠀⠀⠀⠀⢹⣿⣿⡝⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿⠋⠀⠀⠀⠀⠠⠃⠁⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⡿⠋⠀⠀</span>',
  '<span class="eyes">  ⠀⠀⠀⠙⡄⠀⠀⠀⠀⠀⢸⣿⣿⡃⢼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⡏⠉⠉⠻⣿⡿⠋⠀⠀⠀⠀</span>',
  '<span class="eyes">  ⠀⠀⠀⠀⢰⠀⠀⠰⡒⠊⠻⠿⠋⠐⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⠀⠀⠀⠀⣿⠇⠀⠀⠀⠀⠀</span>',
  '<span class="eyes">  ⠀⠀⠀⠀⠸⣇⡀⠀⠑⢄⠀⠀⠀⡠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢖⠠⠤⠤⠔⠙⠻⠿⠋⠱⡑⢄⠀⢠⠟⠀⠀⠀⠀⠀⠀</span>',
  '<span class="eyes">  ⠀⠀⠀⠀⠀⠀⠈⠉⠒⠒⠻⠶⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠡⢀⡵⠃⠀⠀⠀⠀⠀⠀⠀</span>',
  '<span class="eyes">                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠦⣀⠀⠀⠀⠀⠀⢀⣤⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀</span>',
  '█▀ █▄▀ █▄█     █ ▄▀█ █▀▀ █▄▀ █▀ █▀█ █▄ █<span class="eyes"> ⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠙⠛⠓⠒⠲⠿⢍⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>',
  "▄█ █ █  █    █▄█ █▀█ █▄▄ █ █ ▄█ █▄█ █ ▀█.DEV",
  "<br>",
  "type or click <a href='#' onClick='helpCMD();'>[ help ]</a> for commands.",
];