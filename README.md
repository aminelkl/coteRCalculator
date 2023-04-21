
# Calculateur Cote R


Application console Node.js qui calcule votre Cote R en fonction de votre note, de la moyenne de la classe et de l'écart de la classe. L'application vous demandera d'entrer ces valeurs dans la console, puis elle utilisera la formule suivante pour calculer votre Cote R. 


Installation
Pour exécuter l'application, vous devez avoir Node.js installé sur votre machine. Vous pouvez télécharger Node.js depuis le site officiel.

Une fois que vous avez installé Node.js, vous pouvez cloner ce dépôt sur votre machine locale :

```
git clone https://github.com/yourusername/cote-r-calculator.git
```

Ensuite, accédez au répertoire du projet et installez les dépendances :
```
cd calculateur-de-cote-r
npm install
```
Pour utiliser l'application, exécutez simplement la commande suivante dans votre terminal :
```
node index.js
```
L'application vous demandera alors d'entrer votre note, la moyenne de la classe et l'écart de la classe. Une fois que vous avez entré ces valeurs, l'application calculera votre Cote R et l'affichera dans la console.
```


# Formule


CRC = ((Zcol x IDGZ) + IFGZ + 5) x 5

où :

CRC = cote R

Zcol = cote Z au collégial

IDGZ = indicateur de dispersion de groupe basé sur l’écart-type des cotes Z au secondaire des étudiants qui composent le groupe au collégial

IFGZ = indicateur de force de groupe basé sur la moyenne des cotes Z au secondaire des étudiants qui composent le groupe au collégial




