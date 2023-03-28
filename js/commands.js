var linkedin = "https://www.linkedin.com/in/skylarwjackson/";
var email = 'mailto:skylarwjackson2@gmail.com';

help = [
  "<br>",
  'whois                    about the creator',
  'current                  current projects',  
  'projects                 finished projects',
  'linkedin                 open linkedin profile',
  'email                    contact through email',
  'resume                   resume viewer',
  'clear                    clears terminal',
  'credits                  site information',
  "<br>",
];

banner = [
  'Console in development',
  '[■■□□□□□□□□] 20%',
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
  "▄█ █ █  █    █▄█ █▀█ █▄▄ █ █ ▄█ █▄█ █ ▀█.dev",
  "<br>",
  "type help for commands.",
];

whois = [
  "<br>",
  "owner: sky jackson",
  "occupation: student at liberty university",
  "degree: information technology: data networking and security",
  "<br>"
];

current = [
  "<br>",
  ">input project name for more information",
  "<br>",
  'propertiesmove                   college capstone',
  "winchestercpa                     accountant portfolio",
  "<br>"
];

projects = [
  "<br>",
  ">input project name for more information",
  "<br>",
  "nothing to see here... yet.",
  "<br>"
];

credits = [
  "<br>",
  `website was reworked from <a href="https://youtu.be/KtYby2QN0kQ" target="_blank" rel="noopener noreferrer">[ForrestKnight's idea]</a>`,
  "<br>"
];


//project pages
propertiesmove = [
  "<br>",
  '<span class="proptitle">name:</span> propertiesmove',
  '<span class="proptitle">type:</span> website',
  '<span class="proptitle">description:</span> a user-friendly public website that enables property owners to list <br>their houses for rent or sale for a timeframe, and allows prospective buyers <br>to easily search and contact them.',
  '<span class="proptitle">contribution:</span> as the team lead for the capstone project, i successfully supervised <br>and coordinated the development process, ensuring timely completion, maintaining <br>regular communication with the client, and providing guidance to the team throughout <br>the entire project.',
  '<span class="proptitle">link:</span> <a href ="https://www.propertiesmove.com/" target="_blank" rel="noopener noreferrer">[propertiesmove.com]</a>',
  "<br>"
]

winchestercpa = [
  "<br>",
  '<span class="proptitle">name:</span> winchestercpa',
  '<span class="proptitle">type:</span> website',
  '<span class="proptitle">description:</span> professional and informative personal website for an accounting and <br>consulting company based in Winchester, Virginia, showcasing their services and expertise.',
  '<span class="proptitle">contribution:</span> redesigned and optimized a one-page website to enhance its modernity <br>and cleanliness.',
  '<span class="proptitle">link:</span> <a href ="https://www.winchestercpa.com/" target="_blank" rel="noopener noreferrer">[winchestercpa.com]</a>',
  "<br>"
]