const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// variabile che richiama il contenitore
const teamComplete = document.getElementById('container');

// variabile vuota per inserire tutti gli oggetti
let membersData = '';

// ciclo per recuperare i singoli oggetti
for (let i = 0; i < teamMembers.length; i++){

  memberIesimo = teamMembers[i];
  // console.log(memberIesimo);

  const {name, role, email, img} = memberIesimo;
  // console.log(name, role, email, img);


  membersData += `
    <div id="card">
            <div id="subContainerLeft">
                <img src="${img}" alt="${name}" class="img">
            </div>
            
            <div id="subContainerRight">
                <h3>
                ${name}
                </h3>
                <div>
                    ${role}
                </div>
                <a href="#">
                    ${email}
                </a>
            </div>
        </div>
  `
// console.log(membersData);
};

teamComplete.innerHTML = membersData;


