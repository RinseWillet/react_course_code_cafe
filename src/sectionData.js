const sections = [    
    {
        "id" : "1",
        "headerText" : "Motorcycles",
        "type": "picture",
        "pictures" :["/img/motorcycle/foto--1", "/img/motorcycle/foto--2", "/img/motorcycle/foto--3", "/img/motorcycle/foto--4", "/img/motorcycle/foto--5", "/img/motorcycle/foto--6", "/img/motorcycle/foto--7", "/img/motorcycle/foto--8"]
    },
    {
        "id" : "2",
        "headerText" : "Motorcycle video's",
        "type": "video",
        "favorite": true,
        "videos" :["/video/motorcyclevid1.mp4", "/video/motorcyclevid2.mp4"]
    },
    {
        "id" : "3",
        "headerText" : "Motorcycle collection",
        "type": "picture",
        "favorite": true,
        "extraClass" : "mediaSection__list--bigGrid",
        "pictures" :["/img/motorcycle_big/foto--1", "/img/motorcycle_big/foto--2"],
        "customSizes": "calc(100vw/12 * 6), (max-width: 75rem) calc(100vw)"
    },
    {
        "id" : "4",
        "headerText" : "Beach",
        "type": "picture",
        "pictures" :["/img/beach/foto--1", "/img/beach/foto--2", "/img/beach/foto--3", "/img/beach/foto--4", "/img/beach/foto--5", "/img/beach/foto--6", "/img/beach/foto--7", "/img/beach/foto--8"]
    },
    {
        "id" : "5",
        "headerText" : "Nature Video's",
        "type": "video",
        "videos" :["/video/beachvid1.mp4", "/video/forestvid1.mp4"]
    },    
    {
        "id" : "6",
        "headerText" : "Tall forest photos",
        "type": "picture",
        "favorite": true,
        "extraClass" : "mediaSection__list--longGrid",
        "pictures" :["/img/forest_tall/foto--1", "/img/forest_tall/foto--2", "/img/forest_tall/foto--3", "/img/forest_tall/foto--4", "/img/forest_tall/foto--5", "/img/forest_tall/foto--6", "/img/forest_tall/foto--7", "/img/forest_tall/foto--8"]
    }         
];

export default sections;