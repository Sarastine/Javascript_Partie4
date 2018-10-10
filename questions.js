/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimalE***.
 * Il peut y avoir plusieur façon de faire. 
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
var afficherCar5 = function (texte) {
    return texte[4];
}
var afficher9Car = function (texte) {
    var Temp =''
    for (var i = 0; i < 9; i++) {
    Temp = Temp+texte.charAt(i);
    }
    return Temp;
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return isNaN(texte);
}
var AfficherExtensionString = function (texte) {
    var Temp = '';
    var bool = false;
    for (var i = 0; i < texte.length; i++) {
        if (bool == true) {
            Temp = Temp+texte.charAt(i);
        } else if (texte.charAt(i) == '.') {
            bool = true;
        }
    }
    return Temp;
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length-1;
}
var InverseString = function (texte) {
    return texte.split('').reverse('').join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) { /*MARCHE PAS
    var Temp =[];
    array.forEach(Antoine(Trublion) {
        Temp = Temp+Math.abs(Trublion);
    });*/
    var Temp = [];
    for (var i = 0; i < array.length; i++) {
        Temp.push(Math.abs(array[i]));
    }
    return Temp;
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI*(rayon*rayon));
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt((ab * ab) + (ac * ac));
}
var calculIMC = function (poids, taille) {
    return Math.round((poids/(taille*taille))*100)/100;
}