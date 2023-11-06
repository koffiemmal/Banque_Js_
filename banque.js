let Banque = []

let sectionListes = document.querySelector(".Comptes")



let AjoutBtn = document.querySelector(`.Ajout`)

class Compte{

    constructor(id,nom,prenom,age,profession,typeCompte){
        this.id= id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.profession = profession;
        this.typeCompte= typeCompte;
    }
    solde = 0;

    crediter(montantAjouter){

        this.solde +=montantAjouter;

    }


    transaction(id_recepteur){

let montantAEnvoyer = Number(prompt("entrer le montant a envoyer "))

if(montantAEnvoyer>this.solde){
    alert("votre compte ne contient pas cette somme")
    return;
}
switch (this.typeCompte) {
    case "Epargne":
    
    if((montantAEnvoyer+(montantAEnvoyer*0.05))>this.solde)
    {
        alert("votre somme contient la somme mais les frais d'envoie bloque le transfert")
        return;
    }else{

        this.solde-=montantAEnvoyer+(montantAEnvoyer*0.05);
        for(let a of Banque){
            if(a.id == id_recepteur){
                a.solde+=montantAEnvoyer

                Affichage()
            }
        }
    }

        break;
        case "Courant":
    
        if((montantAEnvoyer+(montantAEnvoyer*0.03))>this.solde)
        {
            alert("votre somme contient la somme mais les frais d'envoie bloque le transfert")
            return;
        }else{
    
            this.solde-=montantAEnvoyer+(montantAEnvoyer*0.03);
            for(let a of Banque){
                if(a.id == id_recepteur){
                    a.solde+=montantAEnvoyer
                    
                    Affichage()
                }
            }
        }
    
            break;
            case "Gold":
    
            if((montantAEnvoyer+(montantAEnvoyer*0.02))>this.solde)
            {
                alert("votre somme contient la somme mais les frais d'envoie bloque le transfert")
                return;
            }else{
        
                this.solde-=montantAEnvoyer+(montantAEnvoyer*0.02);
                for(let a of Banque){
                    if(a.id == id_recepteur){
                        a.solde+=montantAEnvoyer
                        
                        Affichage()
                    }
                }
            }
        
                break;

    default:
        break;
}


    }

}


Affichage=()=>{
    if(Banque.length<0){
        console.log("vide")
        return;
    }
    

sectionListes.innerHTML="";

    for(let option of Banque){

        let espace = document.createElement("br")
        let espace2 = document.createElement("br")

        sectionListes.appendChild(espace)
        sectionListes.appendChild(espace2)


        if(option.typeCompte == "Epargne"){


           let divEpargne = document.createElement("div")

           sectionListes.appendChild(divEpargne)

           let espace = document.createElement("br")
           let espace2 = document.createElement("br")

    let idArticle = document.createElement("article")

    let nomArticle = document.createElement("article")
    
    let prenomArticle = document.createElement("article")

    let ageArticle = document.createElement("article")

    let professionArticle = document.createElement("article")

    let typeCompteArticle = document.createElement("article")

    let soldeArticle = document.createElement("article")

    let CrediterBtn = document.createElement("button")

    let TransactionBtn = document.createElement("button")

    let ModifyBTn = document.createElement("button")

    let SupprimerBtn = document.createElement("button")

    idArticle.textContent = `ID ${option.id}`
    
    nomArticle.textContent = `Nom    :${option.nom}`;
    
    prenomArticle.textContent = `Prenom    :${option.prenom}`;
    
    ageArticle.textContent = `Age   :${option.age}`;
    
    professionArticle.textContent = `Profession    :${option.profession}`;
    
    typeCompteArticle.textContent = `Type de Compte    :${option.typeCompte}`;
    
    soldeArticle.textContent = ` Solde     : ${option.solde}$`;
    
    CrediterBtn.textContent ="crediter"

    TransactionBtn.textContent="transaction"

    ModifyBTn.textContent = "Modifier"

    SupprimerBtn.textContent = "Supprimer"
    
    divEpargne.appendChild(typeCompteArticle)

    divEpargne.appendChild(idArticle)
    
    divEpargne.appendChild(nomArticle)
    
    divEpargne.appendChild(prenomArticle)
    
    divEpargne.appendChild(ageArticle)
    
    divEpargne.appendChild(professionArticle)
    
    divEpargne.appendChild(soldeArticle)


    sectionListes.appendChild(espace)
    sectionListes.appendChild(espace2)
    
    CrediterBtn.addEventListener("click",(e)=>{
    
    let Credit = Number(prompt("quel est le montant du credit"))
    
        option.crediter(Credit)
    
        Affichage()
    
    })
divEpargne.appendChild(CrediterBtn)

TransactionBtn.addEventListener("click",(e)=>{
    let iddestinataire = Number(prompt("entrer l'ID du destinataire"))

    option. transaction(iddestinataire)

})

divEpargne.appendChild(ModifyBTn)

ModifyBTn.addEventListener("click",(e)=>{

    let type = Number(prompt("Que voulez-vous modifier \n 1- Nom  \n 2- Prenom  \n 3- Age  \n 4- Profession  "))
    let nombreID = Number(prompt("entrer votre ID"))

 for( element of Banque){
    if(nombreID == element.id){
        switch (type) {
            case 1:
                let nom = prompt("entrer votre nom")
                element.nom = nom;
                break;
                case 2:
                let prenom = prompt("entrer votre prenom")
                element.prenom=prenom
                break;
                case 3:
                let age = Number(prompt("entrer votre age"))
                element.age=age
                break;
                case 4:
                let profession = prompt("entrer votre profession ")
                element.profession = profession
                break;
        
            default:
                break;
        }

    }
    else{
        alert("ce compte n'existe pas ou l'ID est erronéé")
    }
 }
Affichage()
})

SupprimerBtn.addEventListener("click", (e) => {
    let nombreID = Number(prompt("Entrer votre ID"));
    for (let i = 0; i < Banque.length; i++) {
        if (nombreID === Banque[i].id) {
            Banque.splice(i, 1); 
            Affichage();
            break; 
        }
    }
});

divEpargne.appendChild(TransactionBtn)

divEpargne.appendChild(SupprimerBtn)


divEpargne.style.background = 'linear-gradient(grey, rgba(167, 108, 45, 0.364) )';
divEpargne.style.height="35vh"
divEpargne.style.border=" 2px solid black" 
divEpargne.style.borderRadius="25px"
divEpargne.style.display="flex"
divEpargne.style.width="110vh"
divEpargne.style.flexDirection="column"
divEpargne.style.justifyContent="center"
divEpargne.style.alignItems="center"


typeCompteArticle.style.fontSize="30px"

idArticle.style.fontSize="20px"

nomArticle.style.fontSize="20px"

prenomArticle.style.fontSize="20px"

ageArticle.style.fontSize="20px"

professionArticle.style.fontSize="20px"



soldeArticle.style.fontSize="20px"

soldeArticle.style.color="white"


divEpargne.style.backdropFilter='blur(15px);'
divEpargne.style.boxShadow="5px 5px 10px 5px rgba(167, 108, 45, 0.364)"
divEpargne.style.textAlign="center"
CrediterBtn.style.borderRadius="30px"
CrediterBtn.style.height="40px" 
CrediterBtn.style.width="150px"
CrediterBtn.style.fontSize="18px"
/* CrediterBtn.style.background = 'linear-gradient(grey, rgba(167, 108, 45, 0.364) )'; */

TransactionBtn.style.borderRadius="30px"
TransactionBtn.style.height="40px"
TransactionBtn.style.width="150px"
TransactionBtn.style.fontSize="18px"
/* TransactionBtn.style.background = 'linear-gradient(grey, rgba(167, 108, 45, 0.364) )'; */

ModifyBTn.style.borderRadius="30px"
ModifyBTn.style.height="40px"
ModifyBTn.style.width="150px"
ModifyBTn.style.fontSize="18px"



SupprimerBtn.style.borderRadius="30px"
SupprimerBtn.style.height="40px"
SupprimerBtn.style.width="150px"
SupprimerBtn.style.fontSize="18px"

    }

   if(option.typeCompte == "Courant"){

      
    let divCourant = document.createElement("div")

    sectionListes.appendChild(divCourant)

    let espace = document.createElement("br")
    let espace2 = document.createElement("br")

let idArticle = document.createElement("article")

let nomArticle = document.createElement("article")

let prenomArticle = document.createElement("article")

let ageArticle = document.createElement("article")

let professionArticle = document.createElement("article")

let typeCompteArticle = document.createElement("article")

let soldeArticle = document.createElement("article")

let CrediterBtn = document.createElement("button")

let TransactionBtn = document.createElement("button")

let ModifyBTn = document.createElement("button")

let SupprimerBtn = document.createElement("button")

CrediterBtn.textContent ="crediter"

idArticle.textContent = `ID ${option.id}`

nomArticle.textContent = `Nom    :${option.nom}`;

prenomArticle.textContent = `Prenom    :${option.prenom}`;

ageArticle.textContent = `Age   :${option.age}`;

professionArticle.textContent = `Profession    :${option.profession}`;

typeCompteArticle.textContent = `Type de Compte    :${option.typeCompte}`;

soldeArticle.textContent = ` Solde     : ${option.solde}$`;

TransactionBtn.textContent="transaction"

ModifyBTn.textContent = "Modifier"

SupprimerBtn.textContent="Supprimer"



divCourant.appendChild(typeCompteArticle)

divCourant.appendChild(idArticle)

divCourant.appendChild(nomArticle)

divCourant.appendChild(prenomArticle)

divCourant.appendChild(ageArticle)

divCourant.appendChild(professionArticle)

divCourant.appendChild(soldeArticle)



sectionListes.appendChild(espace)
sectionListes.appendChild(espace2)

 CrediterBtn.addEventListener("click",(e)=>{
    
    let Credit = Number(prompt("quel est le montant du credit"))
    
        option.crediter(Credit)
    
        Affichage()
    
    })

divCourant.appendChild(CrediterBtn)


TransactionBtn.addEventListener("click",(e)=>{
    let iddestinataire = Number(prompt("entrer l'ID du destinataire"))

    option. transaction(iddestinataire)

})
divCourant.appendChild(TransactionBtn)

ModifyBTn.addEventListener("click",(e)=>{

    let type = Number(prompt("Que voulez-vous modifier \n 1- Nom  \n 2- Prenom  \n 3- Age  \n 4- Profession  "))
    let nombreID = Number(prompt("entrer votre ID"))

 for( element of Banque){
    if(nombreID == element.id){
        switch (type) {
            case 1:
                let nom = prompt("entrer votre nom")
                element.nom = nom;
                break;
                case 2:
                let prenom = prompt("entrer votre prenom")
                element.prenom=prenom
                break;
                case 3:
                let age = Number(prompt("entrer votre age"))
                element.age=age
                break;
                case 4:
                let profession = prompt("entrer votre profession ")
                element.profession = profession
                break;
        
            default:
                break;
        }

    }
 }
Affichage()
})

divCourant.appendChild(SupprimerBtn)

SupprimerBtn.addEventListener("click", (e) => {
    let nombreID = Number(prompt("Entrer votre ID"));
    for (let i = 0; i < Banque.length; i++) {
        if (nombreID === Banque[i].id) {
            Banque.splice(i, 1); 
            Affichage();
            break; 
        }
    }
});
divCourant.appendChild(ModifyBTn)

divCourant.style.background = 'linear-gradient(grey, rgba(8, 201, 37, 0.364)  )';
divCourant.style.height="30vh"
divCourant.style.border=" 2px solid black" 
divCourant.style.borderRadius="25px"
divCourant.style.display="flex"
divCourant.style.width="110vh"
divCourant.style.flexDirection="column"
divCourant.style.justifyContent="center"
divCourant.style.alignItems="center"

typeCompteArticle.style.fontSize="30px"

idArticle.style.fontSize="20px"

nomArticle.style.fontSize="20px"

prenomArticle.style.fontSize="20px"

ageArticle.style.fontSize="20px"

professionArticle.style.fontSize="20px"



soldeArticle.style.fontSize="20px"

soldeArticle.style.color="white"

divCourant.style.backdropFilter='blur(15px);'
divCourant.style.boxShadow="5px 5px 10px 5px rgba(167, 108, 45, 0.364)"
divCourant.style.textAlign="center"
CrediterBtn.style.borderRadius="30px"
CrediterBtn.style.height="40px" 
CrediterBtn.style.width="150px"
CrediterBtn.style.fontSize="18px"

TransactionBtn.style.borderRadius="30px"
TransactionBtn.style.height="40px"
TransactionBtn.style.width="150px"
TransactionBtn.style.fontSize="18px"


ModifyBTn.style.borderRadius="30px"
ModifyBTn.style.height="40px"
ModifyBTn.style.width="150px"
ModifyBTn.style.fontSize="18px"


SupprimerBtn.style.borderRadius="30px"
SupprimerBtn.style.height="40px"
SupprimerBtn.style.width="150px"
SupprimerBtn.style.fontSize="18px"





}

   
if(option.typeCompte == "Gold"){


    let divGold = document.createElement("div")

    sectionListes.appendChild(divGold)

    let espace = document.createElement("br")
    let espace2 = document.createElement("br")


      let idArticle = document.createElement("article")

let nomArticle = document.createElement("article")

let prenomArticle = document.createElement("article")

let ageArticle = document.createElement("article")

let professionArticle = document.createElement("article")

let typeCompteArticle = document.createElement("article")

let soldeArticle = document.createElement("article")

let CrediterBtn = document.createElement("button")

  let TransactionBtn = document.createElement("button")

  let ModifyBTn= document.createElement("button")

let SupprimerBtn = document.createElement("button")

  ModifyBTn.textContent = "Modifier"

CrediterBtn.textContent ="crediter"

TransactionBtn.textContent="transaction"

SupprimerBtn.textContent="supprimer"


idArticle.textContent = `ID ${option.id}`

nomArticle.textContent = `Nom    :${option.nom}`;

prenomArticle.textContent = `Prenom    :${option.prenom}`;

ageArticle.textContent = `Age   :${option.age}`;

professionArticle.textContent = `Profession    :${option.profession}`;

typeCompteArticle.textContent = `Type de Compte    :${option.typeCompte}`;

soldeArticle.textContent = ` Solde     : ${option.solde}$`;


CrediterBtn.addEventListener("click",(e)=>{

    let Credit = Number(prompt("quel est le montant du credit"))
    
        option.crediter(Credit)
    
        Affichage()
    
    })

TransactionBtn.addEventListener("click",(e)=>{
    let iddestinataire = Number(prompt("entrer l'ID du destinataire"))

    option. transaction(iddestinataire)

})
ModifyBTn.addEventListener("click",(e)=>{

    let type = Number(prompt("Que voulez-vous modifier \n 1- Nom  \n 2- Prenom  \n 3- Age  \n 4- Profession  "))
    let nombreID = Number(prompt("entrer votre ID"))

 for( element of Banque){
    if(nombreID == element.id){
        switch (type) {
            case 1:
                let nom = prompt("entrer votre nom")
                element.nom = nom;
                break;
                case 2:
                let prenom = prompt("entrer votre prenom")
                element.prenom=prenom
                break;
                case 3:
                let age = Number(prompt("entrer votre age"))
                element.age=age
                break;
                case 4:
                let profession = prompt("entrer votre profession ")
                element.profession = profession
                break;
        
            default:
                break;
        }

    }
 }
Affichage()
})



SupprimerBtn.addEventListener("click", (e) => {
    let nombreID = Number(prompt("Entrer votre ID"));
    for (let i = 0; i < Banque.length; i++) {
        if (nombreID === Banque[i].id) {
            Banque.splice(i, 1); 
            Affichage();
            break; 
        }
    }
});



divGold.appendChild(typeCompteArticle)

divGold.appendChild(idArticle)

divGold.appendChild(nomArticle)

divGold.appendChild(prenomArticle)

divGold.appendChild(ageArticle)

divGold.appendChild(professionArticle)

divGold.appendChild(soldeArticle)

divGold.appendChild(CrediterBtn)

divGold.appendChild(TransactionBtn)

divGold.appendChild(ModifyBTn)


sectionListes.appendChild(espace)
sectionListes.appendChild(espace2)

divGold.style.background = 'linear-gradient(grey, rgba(201, 201, 8, 0.364) )';
divGold.style.height="30vh"
divGold.style.border=" 2px solid black" 
divGold.style.borderRadius="25px"
divGold.style.display="flex"
divGold.style.width="110vh"
divGold.style.flexDirection="column"
divGold.style.justifyContent="center"
divGold.style.alignItems="center"

typeCompteArticle.style.fontSize="30px"

idArticle.style.fontSize="20px"

nomArticle.style.fontSize="20px"

prenomArticle.style.fontSize="20px"

ageArticle.style.fontSize="20px"

professionArticle.style.fontSize="20px"



soldeArticle.style.fontSize="20px"

soldeArticle.style.color="white"

divGold.style.backdropFilter='blur(15px);'
divGold.style.boxShadow="5px 5px 10px 5px rgba(167, 108, 45, 0.364) "
divGold.style.textAlign="center"
CrediterBtn.style.borderRadius="30px"
CrediterBtn.style.height="40px" 
CrediterBtn.style.width="150px"
CrediterBtn.style.fontSize="18px"

TransactionBtn.style.borderRadius="30px"
TransactionBtn.style.height="40px"
TransactionBtn.style.width="150px"
TransactionBtn.style.fontSize="18px"

ModifyBTn.style.borderRadius="30px"
ModifyBTn.style.height="40px"
ModifyBTn.style.width="150px"
ModifyBTn.style.fontSize="18px"*

divGold.appendChild(SupprimerBtn)


SupprimerBtn.style.borderRadius="30px"
SupprimerBtn.style.height="40px"
SupprimerBtn.style.width="150px"
SupprimerBtn.style.fontSize="18px"



} 
 

        }



}



AjoutBtn.addEventListener("click",(e)=>{

    let nom = prompt("entrer votre nom");
    let prenom = prompt("entrer votre prenom")
    let age = Number(prompt("entrer votre age"))
    let profession = prompt("entrer votre profession")
    let typeCompte = prompt("a quel type de compte souscriver vous ?!\n 1-) Epargne \n 2-)Courant \n 3-)Gold")

    while(typeCompte != 1 && typeCompte !=2 && typeCompte!=3)
    {
        typeCompte = prompt("a quel type de compte souscriver vous ?!\n 1-) Epargne \n 2-)Courant \n 3-)Gold")
    }
    switch (typeCompte) {
        case `1`:
            Banque.push(new Compte(Banque.length+1,nom,prenom,age,profession,"Epargne"))

            break;
            case `2`:
                Banque.push(new Compte(Banque.length+1,nom,prenom,age,profession,"Courant"))
                break;
                case `3`:
                    Banque.push(new Compte(Banque.length+1,nom,prenom,age,profession,"Gold"))
                    break;
    
        default:
            break;
    }

    console.log(typeCompte)

Affichage()
})


