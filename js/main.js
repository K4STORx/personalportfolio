var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];


setTimeout(function() {
  //loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("welcome@guest:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "margin", 80);
      break;
    case "whois":
      loopLines(whois, "margin", 80);
      break;
    case "projects":
      loopLines(projects, "margin", 80);
      break;
    case "contact":
      loopLines(contact, "margin", 80);
      break;
    case "email":
      addLine('opening <a href="mailto:skylarwjackson2@gmail.com">[ skylarwjackson2@gmail.com ]</a>...');
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "linkedin":
      addLine('opening <a href="https://www.linkedin.com/in/skylarwjackson/" target="_blank" rel="noopener noreferrer">[ linkedin ]</a>...', 0);
      newTab(linkedin);
      break;
    default:
      addLine("command not found.", 100);
      break;
    //propmove
    case "propertiesmove":
      loopLines(propertiesmove, "margin", 80);
      break;
    case "propertiesmove.com":
      addLine('opening <a href="https://propertiesmove.com/" target="_blank" rel="noopener noreferrer">[ propertiesmove.com ]</a>...', 0);
      newTab("https://propertiesmove.com/");
      break;
    case "propertiesmove.archive":
      addLine('opening <a href="http://web.archive.org/web/20230430222914/https://propertiesmove.com/" target="_blank" rel="noopener noreferrer">[ propertiesmove.archive ]</a>...', 0);
      newTab("http://web.archive.org/web/20230430222914/https://propertiesmove.com/");
      break;
    //simprerace
    case "simprerace":
      loopLines(simprerace, "margin", 80);
      break;
    case "skyjackson.dev":
      loopLines(skyjacksondev, "margin", 80);
      break;
    case "bitsandcaffeine":
      loopLines(bitsandcaffeine, "margin", 80);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}

function pushCMD(commandName) {
  command.innerHTML = commandName;
  textarea.value = commandName;
  commands.push(command.innerHTML);
  git = commands.length;
  addLine("welcome@guest:~$ " + command.innerHTML, "no-animation", 0);
  commander(command.innerHTML.toLowerCase());
  command.innerHTML = "";
  textarea.value = "";
}

function whoIsCMD() {
  pushCMD("whois");
}

function projectsCMD() {
  pushCMD("projects");
}

function linkedinCMD() {
  pushCMD("linkedin");
}

function emailCMD() {
  pushCMD("email");
}

function contactCMD() {
  pushCMD("contact");
}

function clearCMD() {
  pushCMD("clear");
}

function helpCMD() {
  pushCMD("help");
}

function propertiesmoveCMD() {
  pushCMD("propertiesmove");
}

function simpreraceCMD() {
  pushCMD("simprerace");
}

function skyjacksondevCMD() {
  pushCMD("skyjackson.dev");
}

function bitsandcaffeineCMD(){
  pushCMD("bitsandcaffeine");
}