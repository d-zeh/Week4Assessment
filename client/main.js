const complimentBtn = document.getElementById("complimentButton")
const zoltarBtn = document.getElementById("zoltar")
const Submit = document.getElementById("addGarmet-submit")
const lookButton = document.getElementById("lookButt")
const InvBtn = document.getElementById("allInv")
const responseSection = document.getElementsByClassName('response-area')[0];



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getInv = () => {
    axios.get("http://localhost:4000/api/inventory/")
        .then(res => {
            const data = res.data;
            printer(data);
        });
    };


const getZoltar = () => {
    axios.get("http://localhost:4000/api/zoltar/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

const addGarmet = (body) => {
    axios.post("http://localhost:4000/api/adder/", body)
        .then(res => {
            const data = res.data;
            console.log(data)
            alert(`Your garmet has been successfully added.\n The ref. number is: ${data.referenceNum}\nSlay$$$`);
        }).catch(err => {
            alert(`Uh Oh`)
        })
    };

const lookup = (body) => {
    axios.get("http://localhost:4000/api/lookup/")
    .then(res => {
        const data = res.data;
        alert(data);
    }).catch(err => {
        console.log(body)
    })
};
        

function lookupHandler(e) {
    e.preventDefault()
    const lookNum = document.getElementById("lookupNum");
    lookup(lookNum)
};
function addHandler(e) {
    e.preventDefault()
    const garmet_name = document.getElementById("addGarmet-garmet_name");
    const season = document.getElementById("addGarmet-season");
    const dept = document.getElementById("addGarmet-dept");
    const selling = document.getElementById("addGarmet-selling");
    const purchased = document.getElementById("addGarmet-purchased");
    const aquired = document.getElementById("addGarmet-aquired");

    let body = {
    garmet_name: garmet_name.value,
     season: season.value,
     dept: dept.value,
     selling: selling.value,
     purchased: purchased.value,
     aquired: aquired.value
 }

 addGarmet(body)
};
function printer(arr) {
    responseSection.innerHTML = '';
    if (arr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("No items!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        arr.forEach(item => {
            const p = document.createElement('p');
            const t = document.createTextNode(item)
            p.appendChild(t);
    
            responseSection.appendChild(p)
        })
    }
 }




complimentBtn.addEventListener('click', getCompliment)
zoltarBtn.addEventListener('click', getZoltar)
Submit.addEventListener(`click`, addHandler)
//lookButton.addEventListener(`click`, lookupHandler)
InvBtn.addEventListener(`click`, getInv)