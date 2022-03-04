//dit is de data, verpakt als json object in const sections

const sections = [
    {
        "id": "1",
        "headerText": "Motorcycles",
        "type": "picture",
        "pictures": ["/img/motorcycle/foto--1", "/img/motorcycle/foto--2", "/img/motorcycle/foto--3", "/img/motorcycle/foto--4", "/img/motorcycle/foto--5", "/img/motorcycle/foto--6", "/img/motorcycle/foto--7", "/img/motorcycle/foto--8"],
        "description": [
            "Op een dag zag ik deze motoren - zo mooi - ik kon ze niet niet fotograferen! Bulderend metaal doet mijn hart ook bulderen.",
            "Dit zijn echt de beste fietsen die je kunt bedenken. Relaxt cruisen, verstand op nul en gaan maar!",
            "Zou jij ook zo'n mooie bike willen? En daarmee de wereld verkennen - het water is de grens."
        ]
    },
    {
        "id": "2",
        "headerText": "Motorcycle video's",
        "type": "video",
        "favorite": true,
        "videos": ["/video/motorcyclevid1.mp4", "/video/motorcyclevid2.mp4"],
        "description": [
            "Een ritje op deze bikes - hoe vet is dat! Het is natuurlijk nog niet hetzelfde als zelf rijden, maar je krijgt al een mooie indruk",
            "Tijdens een rit voel je je heel erg in het hier en nu - je moet opletten! Tegelijkertijd word je jezelf heel bewust van je snelheid door de wind, het geluid, de weg die onder je schoenen heen zoeft.",
            "En natuurlijk is het gaaf om met je vrienden te gaan rijden en daarna samen ergens een koffie te halen - bike parkeren in de zon - en genieten maar!"
        ]
    },
    {
        "id": "3",
        "headerText": "Motorcycle collection",
        "type": "picture",
        "favorite": true,
        "extraClass": "mediaSection__list--bigGrid",
        "pictures": ["/img/motorcycle_big/foto--1", "/img/motorcycle_big/foto--2"],
        "description": [
            "Op een dag zag ik deze motoren - zo mooi - ik kon ze niet niet fotograferen! Bulderend metaal doet mijn hart ook bulderen.",
            "Dit zijn echt de beste fietsen die je kunt bedenken. Relaxt cruisen, verstand op nul en gaan maar!",
            "Zou jij ook zo'n mooie bike willen? En daarmee de wereld verkennen - het water is de grens."
        ],
        "customSizes": "calc(100vw/12 * 6), (max-width: 75rem) calc(100vw)"
    },
    {
        "id": "4",
        "headerText": "Beach",
        "type": "picture",
        "pictures": ["/img/beach/foto--1", "/img/beach/foto--2", "/img/beach/foto--3", "/img/beach/foto--4", "/img/beach/foto--5", "/img/beach/foto--6", "/img/beach/foto--7", "/img/beach/foto--8"],
        "description": [
            "Een dag op het strand - dat is echt goed voor een mens. Even je verstand op nul en je blik op de oneindige horizon werpen.",
            "Het geluid van de branding, de geur, de warmte - is er iets ontspannender dan een tropisch strand?",
            "Liggend onder de palmen met een cocktail een boek lezen, en er ineens achter komen dat de zon aan het ondergaan is. Nog even een snelle duik!"
        ]
    },
    {
        "id": "5",
        "headerText": "Nature Video's",
        "type": "video",
        "videos": ["/video/beachvid1.mp4", "/video/forestvid1.mp4"],
        "description": [
            "Commentaar is niet nodig - de natuur is prachtig. En het is soms lastig te herinneren dat we daar zelf onderdeel van maken!",
            "Ontsnappen van de drukte en energie van de stad. Ineens realiseer je je dat de wereld doordraait ook als er een paar taken blijven liggen.",
            "Bergen, bossen, stranden, woestijnen, oceanen, moerassen, duinen, regenwouden, poolgebieden, het is oneindig divers en voor ieder is er wat wils!"
        ]
    },
    {
        "id": "6",
        "headerText": "Tall forest photos",
        "type": "picture",
        "favorite": true,
        "extraClass": "mediaSection__list--longGrid",
        "pictures": ["/img/forest_tall/foto--1", "/img/forest_tall/foto--2", "/img/forest_tall/foto--3", "/img/forest_tall/foto--4", "/img/forest_tall/foto--5", "/img/forest_tall/foto--6"],
        "description": [
            "Het bos. Het kan een plek van oneindige rust zijn. Bomen van honderden jaren oud die fier de lucht in reiken, ze geven een perspectief op je eigen bestaan.",
            "Wouden zijn ook vaak dicht en donker. Je kunt door de bomen het bos niet meer zien. Dat geeft het bos ook iets oneindigs, en iets overweldigends.",
            "En mensen denken ook vaak aan de roofdieren die je niet kunt zien - wolven, tijgers, beren, mensen zijn ineens niet meer top-dog. Het is dan ook niet zo gek dat het bos inspiratie vormt voor onze mythen, sagen, sprookjes."
        ]
    }
];

export default sections;