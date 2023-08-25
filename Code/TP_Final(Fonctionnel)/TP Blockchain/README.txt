# Guide d'utilisation de l'Application React avec Contrat Solidity

Ce guide vous expliquera comment faire fonctionner notre application React avec notre contrat Solidity en utilisant Ganache et Sepolia comme réseaux de déploiement.

## Étapes

1. **Configuration de truffle-config.js**

    Assurez-vous que le fichier `truffle-config.js` (ou `truffle.js`) est correctement configuré pour vos réseaux. Remplacez la PHRASE SECRETE par votre mnémonique (clé privée) et la CLE INFURA par votre clé d'API Infura.

    ```javascript
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    sepolia: {
      provider: () => new HDWalletProvider("PHRASE SECRETE", "https://sepolia.infura.io/v3/CLE INFURA"),
      network_id: "11155111",
      gas: 4465030,
    },
    ```

2. **Déploiement avec Sepolia**

    Avant de déployer sur Sepolia, assurez-vous que les informations de configuration pour "sepolia" sont correctes dans le fichier `truffle-config.js`. Pour déployer, utilisez la commande suivante dans le terminal :

    ```
    truffle migrate --network sepolia
    ```

3. **Utilisation de l'Application React**

    L'application React interagit avec le contrat Solidity déployé. Assurez-vous que vous avez lancé votre application React avec `npm start` et que les dépendances sont correctement installées.

4. **Tester avec Ganache**

    Pour tester avec Ganache, assurez-vous que Ganache est en cours d'exécution sur le port spécifié dans votre configuration Truffle. Utilisez ensuite la commande `truffle migrate` pour déployer le contrat sur Ganache.

5. **Test de l'Application**

    Lorsque l'application React est lancée, vous pouvez cliquer sur le bouton "SE MARIER" pour déployer le contrat.


Bon test !